import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ppjvtxzghvqxxlcnirzy.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwanZ0eHpnaHZxeHhsY25pcnp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0NTQ2NjMsImV4cCI6MjA0NjAzMDY2M30.UstBh8lbP9N1XQUKLUx5BBkPj6zzUglPNhvz1s7_1lk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
