import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://swggpvfdmddrjmhnyygw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3Z2dwdmZkbWRkcmptaG55eWd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4NjI4OTYsImV4cCI6MjAzNDQzODg5Nn0._TaNF3rwwo3eX5dULkefZ6BS5qeyteV-2wtvQC-QIQc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
