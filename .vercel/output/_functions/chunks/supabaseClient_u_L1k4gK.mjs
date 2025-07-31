import { createBrowserClient } from '@supabase/ssr';

const supabase = createBrowserClient(
  "https://dlyrrpjyaqpcbccjzdmq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRseXJycGp5YXFwY2JjY2p6ZG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MjI4ODgsImV4cCI6MjA2OTE5ODg4OH0.a-DFNSoYR1tUwcaZsfEz9L_i_Ksj4QDBqPBQOLw0QRI"
);

export { supabase as s };
