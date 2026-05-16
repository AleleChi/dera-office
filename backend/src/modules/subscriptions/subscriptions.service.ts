import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class SubscriptionsService {
  private supabase;

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_KEY || '',
    );
  }

  async getAll() {
    const { data, error } = await this.supabase
      .from('subscriptions')
      .select('*')
      .order('expiry_date', { ascending: true });

    if (error) throw error;
    return data;
  }

  async create(subscriptionData: any) {
    const { data, error } = await this.supabase
      .from('subscriptions')
      .insert([subscriptionData])
      .select();

    if (error) throw error;
    return data[0];
  }

  async update(id: number, subscriptionData: any) {
    const { data, error } = await this.supabase
      .from('subscriptions')
      .update(subscriptionData)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data[0];
  }

  async delete(id: number) {
    const { error } = await this.supabase
      .from('subscriptions')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  }
}
