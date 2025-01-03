import { createClient } from "@supabase/supabase-js";

console.log("Supabase URL:", process.env.REACT_APP_SUPABASE_URL);
console.log("Supabase Anon Key:", process.env.REACT_APP_SUPABASE_ANON_KEY);

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase URL or anon key in production");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
