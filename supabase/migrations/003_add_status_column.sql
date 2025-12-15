-- Migration: Add status column to user_progress
-- Description: Adds a 'status' column to track if an answer was correct or wrong.

ALTER TABLE user_progress 
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'completed';

-- Update existing rows to have a default status if needed (optional, handled by default)
-- UPDATE user_progress SET status = 'completed' WHERE status IS NULL;
