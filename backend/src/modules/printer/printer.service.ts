import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class PrinterService {
  private supabase;

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_KEY || '',
    );
  }

  async getLogs() {
    const { data, error } = await this.supabase
      .from('printer_logs')
      .select('*')
      .order('date', { ascending: false });

    if (error) throw error;
    return data;
  }

  async createLog(logData: any) {
    const { data, error } = await this.supabase
      .from('printer_logs')
      .insert([logData])
      .select();

    if (error) throw error;
    return data[0];
  }

  async updateLog(id: number, logData: any) {
    const { data, error } = await this.supabase
      .from('printer_logs')
      .update(logData)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data[0];
  }

  async deleteLog(id: number) {
    const { error } = await this.supabase
      .from('printer_logs')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  }
}
