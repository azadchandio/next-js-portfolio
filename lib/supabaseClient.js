import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('[Supabase] ERROR: Missing credentials. Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.');
  // Proxy that throws on any method call
  supabase = new Proxy({}, {
    get() {
      throw new Error('[Supabase] CONTEXT ERROR: Attempted to use Supabase client without valid credentials.');
    }
  });
} else {
  console.log('[Supabase] Connected: Credentials found, initializing client.');
  const realClient = createClient(supabaseUrl, supabaseAnonKey);
  // Proxy to log when a request is made
  supabase = new Proxy(realClient, {
    get(target, prop, receiver) {
      const orig = target[prop];
      if (typeof orig === 'function') {
        return function(...args) {
          console.log(`[Supabase] Request: ${String(prop)}`);
          return orig.apply(target, args);
        };
      }
      return orig;
    }
  });
}

// Function to check DB connectivity
export async function checkSupabaseConnection() {
  try {
    const { error } = await supabase.from('projects').select('id').limit(1);
    if (error) {
      console.error('[Supabase] DB Connection Test FAILED:', error.message);
      return false;
    } else {
      console.log('[Supabase] DB Connection Test SUCCESS');
      return true;
    }
  } catch (err) {
    console.error('[Supabase] DB Connection Test ERROR:', err.message);
    return false;
  }
}

export { supabase };
