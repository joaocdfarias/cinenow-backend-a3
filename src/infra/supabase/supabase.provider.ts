import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY,
  {
    auth: {
      persistSession: false,
    },
  },
);

export const SupabaseProvider = {
  provide: 'SUPABASE_PROVIDER',
  useValue: supabase,
};
