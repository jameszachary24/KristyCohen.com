/* 
# Create tables for user inputs

1. New Tables
   - `onboarding_submissions`
     - `id` (uuid, primary key)
     - `name` (text)
     - `email` (text)
     - `business_type` (text)
     - `revenue` (text)
     - `goals` (text[])
     - `website` (text)
     - `created_at` (timestamp)
   - `leads`
     - `id` (uuid, primary key)
     - `email` (text)
     - `source` (text)
     - `created_at` (timestamp)

2. Security
   - Enable RLS on both tables
   - Add policies for inserting data (public access for anonymous submissions)
   - Add policies for reading data (authenticated only)
*/

-- Onboarding Submissions Table
CREATE TABLE IF NOT EXISTS onboarding_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_type text,
  revenue text,
  goals text[],
  website text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE onboarding_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Enable insert for public" ON onboarding_submissions FOR INSERT WITH CHECK (true);

-- Only authenticated users (admins) can view
CREATE POLICY "Enable select for authenticated users only" ON onboarding_submissions FOR SELECT TO authenticated USING (true);


-- Leads Table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  source text DEFAULT 'general',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for public" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable select for authenticated users only" ON leads FOR SELECT TO authenticated USING (true);