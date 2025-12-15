import { parseQuestionsFromMarkdown } from './parser.js';

export const mistakesLogic = {
    // Check if there are any mistakes
    hasMistakes(progress) {
        if (!progress) return false;
        for (const modId in progress) {
            for (const qIdx in progress[modId]) {
                if (progress[modId][qIdx] === 'wrong') return true;
            }
        }
        return false;
    },

    // Get count of mistakes
    getMistakeCount(progress) {
        let count = 0;
        if (!progress) return 0;
        for (const modId in progress) {
            for (const qIdx in progress[modId]) {
                if (progress[modId][qIdx] === 'wrong') count++;
            }
        }
        return count;
    },

    // Load mistake questions from multiple modules
    async loadMistakeQuestions(progress, modulesList) {
        // 1. Identify needed questions: { modId: [idx1, idx2] }
        const needed = {};
        for (const modId in progress) {
            for (const qIdx in progress[modId]) {
                if (progress[modId][qIdx] === 'wrong') {
                    if (!needed[modId]) needed[modId] = [];
                    needed[modId].push(parseInt(qIdx));
                }
            }
        }

        const finalQuestions = [];

        // 2. Fetch and parse each needed module
        for (const modId in needed) {
            const modDef = modulesList.find(m => m.id === modId);
            if (!modDef) continue;

            try {
                const response = await fetch(modDef.file);
                const text = await response.text();
                // Parse ALL questions for this module
                const allQuestions = parseQuestionsFromMarkdown(text, modId);

                // 3. Filter and map
                const indices = needed[modId].sort((a, b) => a - b); // Sort indices for stability

                indices.forEach(idx => {
                    // idx is the array index
                    if (allQuestions[idx]) {
                        // Clone and tag
                        const mistakeQ = {
                            ...allQuestions[idx],
                            originalModuleId: modId,
                            originalIndex: idx,
                            originalModule: modDef.name,
                            badge: `From ${modDef.name}` // Badge for UI
                        };
                        finalQuestions.push(mistakeQ);
                    }
                });
            } catch (e) {
                console.error(`Error loading mistakes for ${modId}`, e);
            }
        }

        return finalQuestions;
    }
};
