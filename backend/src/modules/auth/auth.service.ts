import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

interface RegisterData {
  email: string;
  password: string;
  companyName?: string;
  firstName?: string;
  lastName?: string;
}

@Injectable()
export class AuthService {
  private supabase: SupabaseClient;
  private readonly logger = new Logger(AuthService.name);

  constructor(private jwtService: JwtService) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    this.logger.log(`SUPABASE_URL: ${supabaseUrl}`);
    this.logger.log(`SUPABASE_SERVICE_ROLE_KEY: ${supabaseKey ? '[SET]' : '[NOT SET]'}`);

    if (!supabaseUrl || !supabaseKey) {
      this.logger.error('Supabase credentials not configured');
      throw new Error('Supabase credentials not configured');
    }

    this.supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }

  async login(email: string, password: string) {
    this.logger.log(`Attempting login for: ${email}`);
    
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      this.logger.error(`Login failed: ${error.message}`);
      throw new Error(error.message);
    }

    const userProfile = await this.getUserProfile(data.user?.id);

    return {
      access_token: data.session?.access_token,
      user: data.user,
      profile: userProfile,
    };
  }

  private async getUserProfile(authId: string) {
    const { data, error } = await this.supabase
      .from('users')
      .select('*, companies(*)')
      .eq('auth_id', authId)
      .single();

    if (error && error.code !== 'PGRST116') {
      this.logger.error(`Error fetching user profile: ${error.message}`);
    }

    return data || null;
  }

  async register(registerData: RegisterData) {
    const { email, password, companyName, firstName, lastName } = registerData;

    this.logger.log(`Starting registration for email: ${email}`);
    this.logger.log(`Register data received:`, { email, companyName, firstName, lastName });

    const { data: authData, error: authError } = await this.supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      this.logger.error(`Auth signup failed: ${authError.message}`);
      throw new Error(authError.message);
    }

    if (!authData.user) {
      this.logger.error('No user returned from auth signup');
      throw new Error('Registration failed: No user created');
    }

    const authId = authData.user.id;
    this.logger.log(`Auth user created with ID: ${authId}`);

    let companyId: string | null = null;
    let userRecordId: string | null = null;

    const companyResult = await this.supabase
      .from('companies')
      .insert([{
        name: companyName || `${email.split('@')[0]}'s Company`,
        email: email,
      }])
      .select()
      .single();

    if (companyResult.error) {
      this.logger.error(`Company creation failed: ${companyResult.error.message}`);
      throw new Error(`Failed to create company: ${companyResult.error.message}`);
    }

    companyId = companyResult.data?.id;
    this.logger.log(`Company created with ID: ${companyId}`);

    const userResult = await this.supabase
      .from('users')
      .insert([{
        auth_id: authId,
        email: email,
        first_name: firstName || '',
        last_name: lastName || '',
        company_id: companyId,
        role: 'owner',
      }])
      .select()
      .single();

    if (userResult.error) {
      this.logger.error(`User profile creation failed: ${userResult.error.message}`);
      throw new Error(`Failed to create user profile: ${userResult.error.message}`);
    }

    userRecordId = userResult.data?.id;
    this.logger.log(`User profile created with ID: ${userRecordId}`);

    const memberResult = await this.supabase
      .from('members')
      .insert([{
        user_id: userRecordId,
        company_id: companyId,
        role: 'owner',
      }])
      .select()
      .single();

    if (memberResult.error) {
      this.logger.warn(`Member relationship creation failed: ${memberResult.error.message}`);
    } else {
      this.logger.log(`Member relationship created`);
    }

    return {
      user: authData.user,
      company: {
        id: companyId,
        name: companyResult.data?.name,
      },
    };
  }

  async validateToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (err) {
      return null;
    }
  }
}