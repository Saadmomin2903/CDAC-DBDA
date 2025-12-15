// Supabase Client Setup
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.3/+esm';
import { SUPABASE_CONFIG } from './config.js';

// Initialize Supabase client
export const supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

// Auth helpers
export const auth = {
    // Sign up new user
    async signUp(email, password, metadata = {}) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: metadata
            }
        });
        return { data, error };
    },

    // Sign in existing user
    async signIn(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        return { data, error };
    },

    // Sign out
    async signOut() {
        const { error } = await supabase.auth.signOut();
        return { error };
    },

    // Get current session
    async getSession() {
        const { data: { session }, error } = await supabase.auth.getSession();
        return { session, error };
    },

    // Get current user
    async getUser() {
        const { data: { user }, error } = await supabase.auth.getUser();
        return { user, error };
    },

    // Listen to auth state changes
    onAuthStateChange(callback) {
        return supabase.auth.onAuthStateChange(callback);
    },

    // Reset password
    async resetPassword(email) {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`
        });
        return { data, error };
    }
};

// Database helpers
export const db = {
    // Progress operations
    async saveProgress(userId, moduleId, questionIndex, status = 'completed') {
        const { data, error } = await supabase
            .from('user_progress')
            .upsert({
                user_id: userId,
                module_id: moduleId,
                question_index: questionIndex,
                completed_at: new Date().toISOString(),
                status: status
            }, {
                onConflict: 'user_id,module_id,question_index'
            });

        if (error) {
            console.error('SUPABASE SAVE ERROR:', error);
        } else {
            console.log('SUPABASE SAVE SUCCESS:', { moduleId, questionIndex, status });
        }

        return { data, error };
    },

    async deleteProgress(userId, moduleId, questionIndex) {
        const { error } = await supabase
            .from('user_progress')
            .delete()
            .match({
                user_id: userId,
                module_id: moduleId,
                question_index: questionIndex
            });
        return { error };
    },

    async getProgress(userId) {
        const { data, error } = await supabase
            .from('user_progress')
            .select('*')
            .eq('user_id', userId);
        return { data, error };
    },

    // Bookmark operations
    async saveBookmark(userId, moduleId, questionIndex) {
        const { data, error } = await supabase
            .from('user_bookmarks')
            .upsert({
                user_id: userId,
                module_id: moduleId,
                question_index: questionIndex
            }, {
                onConflict: 'user_id,module_id,question_index'
            });
        return { data, error };
    },

    async deleteBookmark(userId, moduleId, questionIndex) {
        const { error } = await supabase
            .from('user_bookmarks')
            .delete()
            .match({
                user_id: userId,
                module_id: moduleId,
                question_index: questionIndex
            });
        return { error };
    },

    async getBookmarks(userId) {
        const { data, error } = await supabase
            .from('user_bookmarks')
            .select('*')
            .eq('user_id', userId);
        return { data, error };
    },

    // Profile operations
    async getProfile(userId) {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();
        return { data, error };
    },

    async updateProfile(userId, updates) {
        const { data, error } = await supabase
            .from('profiles')
            .update(updates)
            .eq('id', userId);
        return { data, error };
    },

    // Stats operations
    async getStats(userId) {
        const { data, error } = await supabase
            .from('user_stats')
            .select('*')
            .eq('user_id', userId)
            .single();
        return { data, error };
    },

    async updateStats(userId, updates) {
        const { data, error } = await supabase
            .from('user_stats')
            .upsert({
                user_id: userId,
                ...updates
            }, {
                onConflict: 'user_id'
            });
        return { data, error };
    }
};

// Utility functions
export const utils = {
    // Show toast notification
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 100);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    // Handle errors
    handleError(error, context = '') {
        console.error(`Error in ${context}:`, error);
        this.showToast(error.message || 'An error occurred', 'error');
    }
};
