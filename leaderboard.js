import { supabase } from './supabase-client.js';

export const leaderboardLogic = {

    // Top Scorers: From exam_results joined with profiles
    async fetchTopScorers() {
        try {
            const { data, error } = await supabase
                .from('exam_results')
                .select(`
                    id, score, total, percentage, completed_at,
                    profiles (username, full_name, avatar_url)
                `)
                .order('percentage', { ascending: false })
                .limit(10);

            if (error) throw error;

            return data.map(item => ({
                id: item.id,
                name: item.profiles?.full_name || item.profiles?.username || 'Anonymous',
                avatar: item.profiles?.avatar_url,
                score: `${item.score}/${item.total}`,
                percentage: `${item.percentage}%`,
                date: new Date(item.completed_at).toLocaleDateString()
            }));
        } catch (e) {
            console.error('Error fetching top scorers:', e);
            return [];
        }
    },

    // Top Learners: From user_stats joined with profiles
    async fetchTopLearners() {
        try {
            const { data, error } = await supabase
                .from('user_stats')
                .select(`
                    total_questions_completed,
                    streak_days,
                    profiles (username, full_name, avatar_url)
                `)
                .order('total_questions_completed', { ascending: false })
                .limit(10);

            if (error) throw error;

            return data.map(item => ({
                name: item.profiles?.full_name || item.profiles?.username || 'Anonymous',
                avatar: item.profiles?.avatar_url,
                metric: `${item.total_questions_completed} Questions`,
                subMetric: `${item.streak_days} Day Streak`
            }));
        } catch (e) {
            console.error('Error fetching top learners:', e);
            return [];
        }
    },

    async saveExamResult(result, currentUser) {
        if (!currentUser) return; // Anonymous users don't save to leaderboard

        const payload = {
            user_id: currentUser.id,
            score: result.score,
            total: result.total,
            percentage: result.percentage,
            passed: result.passed
        };

        const { error } = await supabase.from('exam_results').insert(payload);
        if (error) console.error('Error saving exam result:', error);
    }
};
