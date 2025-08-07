import { createClient } from '@supabase/supabase-js';

const URL = "https://hqebolduperbhnjocgof.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxZWJvbGR1cGVyYmhuam9jZ29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNzMwNTYsImV4cCI6MjA2OTk0OTA1Nn0.r0kMHsxR2tR_MxWGVSyO06iIdLca6p8JLR479pmMmuA";
export const supabase = createClient(URL, API_KEY)