
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://mrfoeewcuhyygzmrxmlk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yZm9lZXdjdWh5eWd6bXJ4bWxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3Nzg5OTMsImV4cCI6MjA5MDM1NDk5M30.HkMfH02Jw7Q0cjGsk5DitBA9EIyE34XIXd1poE3zKZ4'
const supabase = createClient(supabaseUrl, supabaseKey);

export {supabaseKey,supabaseUrl} 
export default supabase;