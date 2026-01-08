import { createClient } from '@supabase/supabase-js'

// Project ID will be auto-injected during deployment
const SUPABASE_URL = 'https://kbvyhuguwjlaejyjzlrp.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtidnlodWd1d2psYWVqeWp6bHJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4NDE4NjMsImV4cCI6MjA4MzQxNzg2M30.Yf-XipTRYPq3aIwcjFRdIoPtWj4_EpU4CrTFilsn4C0'

if(!SUPABASE_URL || !SUPABASE_ANON_KEY ){
  throw new Error('Missing Supabase variables');
}

export default createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
})