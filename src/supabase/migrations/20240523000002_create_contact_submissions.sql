/* 
# Create contact submissions table
1. New Tables
   - `contact_submissions`
     - `id` (uuid, primary key)
     - `name` (text)
     - `email` (text)
     - `subject` (text)
     - `message` (text)
     - `created_at` (timestamp)
2. Security
   - Enable RLS
   - Add policy for public insertion
   - Add policy for admin reading
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public to insert contact forms
CREATE POLICY "Enable insert for public" ON contact_submissions FOR INSERT WITH CHECK (true);

-- Allow authenticated users (admins) to view
CREATE POLICY "Enable select for authenticated users" ON contact_submissions FOR SELECT TO authenticated USING (true);