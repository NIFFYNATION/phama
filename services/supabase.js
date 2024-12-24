import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://mvmmoztcggllwqtdcizv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12bW1venRjZ2dsbHdxdGRjaXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5ODY1MzUsImV4cCI6MjA1MDU2MjUzNX0.7VfkTJOT1gF12vHEYQdL9x1yKeqeT4kc7ub3K3WIQCM";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
