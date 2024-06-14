export interface SupabaseUploadResponse {
  data: { path: string; fullPath: string; id: string } | null;
  error?: null;
}
