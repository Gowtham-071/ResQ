// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://omrzyyljcjzzphdtemgy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tcnp5eWxqY2p6enBoZHRlbWd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwOTY2MjcsImV4cCI6MjA1ODY3MjYyN30.yE0-lM6iDXB6L47iC4JKLuWmh-tJG6Tcnw5X88Ju2ic";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);