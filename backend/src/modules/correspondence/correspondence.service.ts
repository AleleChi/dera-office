import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class CorrespondenceService {
  private supabase;

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_KEY || '',
    );
  }

  async getAllCorrespondence() {
    const { data, error } = await this.supabase
      .from('correspondence')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }

  async getCorrespondenceById(id: number) {
    const { data, error } = await this.supabase
      .from('correspondence')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  }

  async createCorrespondence(correspondenceData: any) {
    const { data, error } = await this.supabase
      .from('correspondence')
      .insert([correspondenceData])
      .select();

    if (error) throw error;
    return data[0];
  }

  async updateCorrespondence(id: number, correspondenceData: any) {
    const { data, error } = await this.supabase
      .from('correspondence')
      .update(correspondenceData)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data[0];
  }

  async deleteCorrespondence(id: number) {
    const { error } = await this.supabase
      .from('correspondence')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  }
}
