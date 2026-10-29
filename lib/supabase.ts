import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export type Product = {
  id: string;
  title: string;
  description: string;
  price_cfd: number;
  price_usd: number;
  file_path: string;
  file_size: number;
  category: string;
  featured: boolean;
  created_at: string;
};

export type Order = {
  id: string;
  user_id: string;
  product_id: string;
  amount: number;
  currency: string;
  payment_method: string;
  payment_status: string;
  transaction_id: string;
  download_token: string;
  download_used: boolean;
  created_at: string;
};

export type User = {
  id: string;
  email: string;
  created_at: string;
  last_login: string;
};