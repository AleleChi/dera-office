import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class ConsumablesService {
  private supabase;

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_KEY || '',
    );
  }

  async getAll() {
    const { data, error } = await this.supabase
      .from('consumables')
      .select('*')
      .order('date', { ascending: false });

    if (error) throw error;
    return data;
  }

  async create(consumableData: any) {
    const { data, error } = await this.supabase
      .from('consumables')
      .insert([consumableData])
      .select();

    if (error) throw error;
    return data[0];
  }

  async update(id: number, consumableData: any) {
    const { data, error } = await this.supabase
      .from('consumables')
      .update(consumableData)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data[0];
  }

  async delete(id: number) {
    const { error } = await this.supabase
      .from('consumables')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  }
}
