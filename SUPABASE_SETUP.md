# Supabase Setup Guide

## Step 1: Get Your Supabase Credentials

1. Go to https://supabase.com/dashboard
2. Select your **"Dbda-MCQ"** project
3. Click on **Settings** (gear icon) in the left sidebar
4. Click on **API**
5. Copy the following:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (the long string under "Project API keys")

## Step 2: Create config.js File

1. Copy `config.template.js` to `config.js`:
   ```bash
   cp config.template.js config.js
   ```

2. Edit `config.js` and paste your credentials:
   ```javascript
   export const SUPABASE_CONFIG = {
     url: 'https://your-actual-project.supabase.co',
     anonKey: 'your-actual-anon-key-here'
   };
   ```

## Step 3: Run Database Migration

1. Go to your Supabase Dashboard
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy the entire contents of `supabase/migrations/001_initial_schema.sql`
5. Paste it into the SQL editor
6. Click **Run** button

This will create all the necessary tables, indexes, and security policies.

## Step 4: Update HTML File

The `index.html` file needs to be updated to include the new authentication scripts and styles.

## Step 5: Test the Integration

1. Open your app in a browser
2. You should see "Sign In" and "Sign Up" buttons in the header
3. Try creating an account
4. Check your email for verification
5. Sign in and test the features

## Verification Checklist

- [ ] Database tables created in Supabase
- [ ] RLS policies enabled
- [ ] config.js file created with credentials
- [ ] Can sign up for new account
- [ ] Can sign in with existing account
- [ ] Progress saves to Supabase
- [ ] Bookmarks save to Supabase
- [ ] Data syncs across browser tabs

## Troubleshooting

### "Failed to fetch" errors
- Check that your Supabase URL and anon key are correct in config.js
- Make sure your Supabase project is not paused

### Email verification not working
- Check your Supabase Auth settings
- For development, you can disable email confirmation in Supabase Dashboard → Authentication → Settings

### RLS policy errors
- Make sure you ran the migration SQL
- Check that RLS is enabled on all tables
- Verify policies exist in Supabase Dashboard → Database → Policies
