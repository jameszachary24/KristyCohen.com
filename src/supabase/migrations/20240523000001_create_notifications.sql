/*
# Create notifications table

1. New Tables
   - `notifications`
     - `id` (uuid, primary key)
     - `title` (text)
     - `message` (text)
     - `type` (text) - 'success', 'warning', 'info'
     - `is_read` (boolean)
     - `created_at` (timestamp)

2. Security
   - Enable RLS
   - Add policies for public access (demo mode)

3. Seed Data
   - Insert initial sample notifications for the demo
*/

CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  message text NOT NULL,
  type text DEFAULT 'info',
  is_read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- For demo purposes, allow public access
CREATE POLICY "Enable read access for all users" ON notifications FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON notifications FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON notifications FOR UPDATE USING (true);

-- Seed initial data
INSERT INTO notifications (title, message, type, is_read, created_at)
VALUES
  ('Milestone Reached', 'Strategy Session completed successfully. The blueprint is ready for review.', 'success', false, now() - interval '2 days'),
  ('Action Required', 'Please review the initial homepage design mockups by Friday.', 'warning', false, now() - interval '1 day'),
  ('Project Update', 'Tech integration phase has commenced. We are connecting your payment gateways.', 'info', true, now() - interval '5 hours');