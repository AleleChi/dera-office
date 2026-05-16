import { Injectable, Logger } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

interface OnboardingData {
  companyName: string;
  industry: string;
  teamSize: string;
  roles: string[];
  useCases: string[];
  initialSubscription?: {
    name: string;
    cost: number;
    billingCycle: string;
  };
}

@Injectable()
export class OnboardingService {
  private supabase: SupabaseClient;
  private readonly logger = new Logger(OnboardingService.name);

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    this.logger.log(`OnboardingService init - SUPABASE_URL: ${supabaseUrl ? '[SET]' : '[NOT SET]'}`);

    if (!supabaseUrl || !supabaseKey) {
      this.logger.error('Supabase credentials not configured');
    }

    this.supabase = createClient(supabaseUrl || '', supabaseKey || '');
  }

  async saveOnboarding(userId: string, data: OnboardingData) {
    this.logger.log(`=== Saving onboarding for user: ${userId} ===`);
    this.logger.log(`Onboarding data:`, JSON.stringify(data));

    if (!userId) {
      this.logger.error('User ID is missing');
      throw new Error('User ID is required');
    }

    // Find user by auth_id
    this.logger.log(`Looking up user with auth_id: ${userId}`);
    const { data: userData, error: userError } = await this.supabase
      .from('users')
      .select('id, auth_id, company_id, email')
      .eq('auth_id', userId)
      .single();

    if (userError) {
      this.logger.error(`User lookup failed: ${userError.message}`, userError);
      throw new Error(`User not found: ${userError.message}`);
    }

    this.logger.log(`Found user:`, userData);
    const companyId = userData?.company_id;

    if (!companyId) {
      this.logger.error('No company_id found for user');
      throw new Error('Company not found for user');
    }

    // Update company
    this.logger.log(`Updating company ${companyId} with:`, {
      name: data.companyName,
      industry: data.industry,
      team_size: data.teamSize,
    });

    const { error: updateError } = await this.supabase
      .from('companies')
      .update({
        name: data.companyName,
        industry: data.industry,
        team_size: data.teamSize,
      })
      .eq('id', companyId);

    if (updateError) {
      this.logger.error(`Company update failed: ${updateError.message}`, updateError);
      throw new Error(`Failed to update company: ${updateError.message}`);
    }

    this.logger.log('Company updated successfully');

    // Create initial subscription if provided
    if (data.initialSubscription && data.initialSubscription.name) {
      this.logger.log(`Creating subscription:`, data.initialSubscription);
      const { error: subError } = await this.supabase
        .from('subscriptions')
        .insert([{
          company_id: companyId,
          name: data.initialSubscription.name,
          cost: data.initialSubscription.cost,
          billing_cycle: data.initialSubscription.billingCycle || 'monthly',
          status: 'active',
        }]);

      if (subError) {
        this.logger.warn(`Subscription creation failed: ${subError.message}`);
      } else {
        this.logger.log('Subscription created successfully');
      }
    }

    return { success: true, companyId };
  }

  async completeOnboarding(userId: string) {
    this.logger.log(`=== Completing onboarding for user: ${userId} ===`);

    // Find user by auth_id
    this.logger.log(`Looking up user with auth_id: ${userId}`);
    const { data: userData, error: userError } = await this.supabase
      .from('users')
      .select('id, auth_id, email')
      .eq('auth_id', userId)
      .single();

    if (userError) {
      this.logger.error(`User lookup failed: ${userError.message}`, userError);
      throw new Error(`User not found: ${userError.message}`);
    }

    this.logger.log(`Found user:`, userData);

    // Update user with onboarding_completed = true
    this.logger.log(`Setting onboarding_completed = true for user id: ${userData.id}`);
    const { error: updateError } = await this.supabase
      .from('users')
      .update({ onboarding_completed: true })
      .eq('id', userData.id);

    if (updateError) {
      this.logger.error(`Onboarding completion failed: ${updateError.message}`, updateError);
      throw new Error(`Failed to complete onboarding: ${updateError.message}`);
    }

    this.logger.log('Onboarding completed successfully');
    return { success: true };
  }
}