import { Global, Module } from '@nestjs/common';
import { SupabaseProvider } from './supabase.provider';
import { SupabaseService } from './supabase.service';

@Global()
@Module({
  providers: [SupabaseProvider, SupabaseService],
  exports: [SupabaseService],
})
export class SupabaseModule {}
