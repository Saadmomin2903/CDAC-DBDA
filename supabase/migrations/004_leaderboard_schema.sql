-- Leaderboard & Exam Results Schema

-- 1. Create exam_results table with FK to profiles for Public Access Joins
CREATE TABLE IF NOT EXISTS exam_results (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL, 
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  percentage INTEGER NOT NULL,
  passed BOOLEAN NOT NULL,
  modules JSONB, 
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Enable RLS
ALTER TABLE exam_results ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policies for exam_results

DROP POLICY IF EXISTS "Users can upload their own exam results" ON exam_results;
CREATE POLICY "Users can upload their own exam results"
  ON exam_results FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Public can view all exam results" ON exam_results;
CREATE POLICY "Public can view all exam results"
  ON exam_results FOR SELECT
  USING (true);

-- 4. Open up visibility for Leaderboard (Profiles & Stats)

DROP POLICY IF EXISTS "Public can view all profiles" ON profiles;
CREATE POLICY "Public can view all profiles"
  ON profiles FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public can view all user stats" ON user_stats;
CREATE POLICY "Public can view all user stats"
  ON user_stats FOR SELECT
  USING (true);

-- 5. Fix user_stats FK to point to profiles (to enable joins)
-- We attempt to drop the old constraint if we can guess its name,
-- or typically we assume this might fail if users logic runs differently.
-- For safety in this environment, we just try to add a new FK if possible or rely on standard keys.
-- Best Effort: Alter foreign key for user_stats to allow easy joining with profiles
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'user_stats_user_id_fkey') THEN
    ALTER TABLE user_stats DROP CONSTRAINT user_stats_user_id_fkey;
    ALTER TABLE user_stats ADD CONSTRAINT user_stats_user_id_fkey FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;
  END IF;
END $$;
