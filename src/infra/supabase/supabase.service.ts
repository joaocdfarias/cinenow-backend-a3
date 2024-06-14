import { Inject, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

import { SupabaseProvider } from './supabase.provider';
import { SupabaseUploadResponse } from './interfaces/upload-response.interface';

@Injectable()
export class SupabaseService {
  constructor(
    @Inject(SupabaseProvider.provide)
    private readonly supabaseProvider: SupabaseClient<any, 'public', any>,
  ) {}

  async uploadFile(file: Express.Multer.File) {
    const data = (await this.supabaseProvider.storage
      .from('cinenow')
      .upload(file.originalname, file.buffer, {
        upsert: true,
      })) as SupabaseUploadResponse;

    const publicUrl = this.supabaseProvider.storage
      .from('cinenow')
      .getPublicUrl(data.data.path);

    return {
      path: data.data.path,
      fullPath: data.data.fullPath,
      id: data.data.id,
      publicUrl: publicUrl.data.publicUrl,
    };
  }
}
