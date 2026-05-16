import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class GasLogsService {
  private supabase;

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_KEY || '',
    );
  }

  async getAll() {
    const { data, error } = await this.supabase
      .from('gas_logs')
      .select('*')
      .order('date', { ascending: false });

    if (error) throw error;
    return data;
  }

  async create(logData: any) {
    const { data, error } = await this.supabase
      .from('gas_logs')
      .insert([logData])
      .select();

    if (error) throw error;
    return data[0];
  }

  async update(id: number, logData: any) {
    const { data, error } = await this.supabase
      .from('gas_logs')
      .update(logData)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data[0];
  }

  async delete(id: number) {
    const { error } = await this.supabase
      .from('gas_logs')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  }
}
