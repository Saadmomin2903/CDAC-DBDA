import { parseQuestionsFromMarkdown } from './parser.js';

export const examLogic = {
    // Configuration
    TOTAL_QUESTIONS: 50,
    TIME_LIMIT_MINUTES: 60,

    // State
    questions: [],
    userAnswers: {}, // { index: 'option' }
    timerInterval: null,
    startTime: null,
    endTime: null,

    // 1. Generate Exam
    async generateExam(modulesList, targetModuleIds = null) {
        // Collect all questions from all modules
        let allPool = [];

        for (const mod of modulesList) {
            try {
                // Skip mistakes test module
                if (mod.id === 'mistakes') continue;

                // Filter: If targets provided, skip if not in list
                if (targetModuleIds && !targetModuleIds.includes(mod.id)) continue;

                const response = await fetch(mod.file);
                const text = await response.text();
                const questions = parseQuestionsFromMarkdown(text, mod.id);

                // Add metadata
                questions.forEach(q => {
                    q.originalModule = mod.name;
                    q.badge = mod.name;
                });

                allPool = allPool.concat(questions);
            } catch (e) {
                console.error(`Error loading module ${mod.id} for exam`, e);
            }
        }

        // Shuffle and Select
        this.questions = this.shuffleArray(allPool).slice(0, this.TOTAL_QUESTIONS);
        this.userAnswers = {};
        return this.questions;
    },

    // 2. Start Timer
    startTimer(onTick, onTimeUp) {
        if (this.timerInterval) clearInterval(this.timerInterval);

        this.startTime = Date.now();
        const durationMs = this.TIME_LIMIT_MINUTES * 60 * 1000;
        this.endTime = this.startTime + durationMs;

        this.timerInterval = setInterval(() => {
            const now = Date.now();
            const remaining = this.endTime - now;

            if (remaining <= 0) {
                clearInterval(this.timerInterval);
                onTimeUp();
            } else {
                onTick(this.formatTime(remaining));
            }
        }, 1000);

        // Initial tick
        onTick(this.formatTime(durationMs));
    },

    stopTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
    },

    // 3. Helper: Format MM:SS
    formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },

    // 4. Helper: Shuffle
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },

    // 5. Submit & Score
    calculateScore() {
        let score = 0;
        let correctAnswers = 0;
        let wrongAnswers = 0;
        let unattempted = 0;

        this.questions.forEach((q, index) => {
            const userAns = this.userAnswers[index];
            if (!userAns) {
                unattempted++;
            } else if (userAns === q.answer) {
                score++;
                correctAnswers++;
            } else {
                wrongAnswers++;
            }
        });

        const percentage = Math.round((score / this.TOTAL_QUESTIONS) * 100);
        const passed = percentage >= 60; // 60% Passing mark

        return {
            score,
            total: this.TOTAL_QUESTIONS,
            percentage,
            passed,
            correctAnswers,
            wrongAnswers,
            unattempted
        };
    }
};
