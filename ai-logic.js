// ========================================
// AI Logic Module (Mistral API)
// ========================================

import { MISTRAL_CONFIG } from './config.js';

const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat/completions';
const MODEL_ID = 'mistral-tiny'; // Cost-effective model

export const aiLogic = {
    /**
     * Get the stored API key or hardcoded fallback
     */
    getApiKey() {
        return MISTRAL_CONFIG.key;
    },

    /**
     * Save the API key (No-op since we're using hardcoded key)
     */
    saveApiKey(key) {
        // No-op
        return true;
    },

    /**
     * Remove the API key (No-op)
     */
    clearApiKey() {
        // No-op
    },

    /**
     * improved Prompt construction
     */
    constructPrompt(question, options, correctAnswer, userChoice) {
        const optionText = options.map(o => `- ${o.label}: ${o.text}`).join('\n');

        return `
You are an expert Computer Science Tutor. 
Explain this Multiple Choice Question clearly and concisely.

**Question:**
${question}

**Options:**
${optionText}

**Correct Answer:** ${correctAnswer}
${userChoice ? `**User Selected:** ${userChoice}` : ''}

**Instructions:**
1. Start by directly stating why option ${correctAnswer} is correct.
2. Briefly explain why the other options are incorrect.
3. Keep the explanation short (under 150 words) and easy to understand.
4. Use Markdown formatting (bold key terms, code blocks for code).
5. Be encouraging.
        `.trim();
    },

    /**
     * Fetch explanation from Mistral API
     */
    /**
     * Fetch explanation from AI
     * - Production: Uses /api/chat (Serverless Proxy) - SECURE
     * - Localhost: Uses MISTRAL_CONFIG.key (Dev only)
     */
    async getExplanation(questionText, options, correctAnswer, userChoice) {
        const prompt = this.constructPrompt(questionText, options, correctAnswer, userChoice);
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

        try {
            let response;

            // STRATEGY 1: Use Proxy (Production Secure)
            if (!isLocal || !MISTRAL_CONFIG?.key) {
                // If on Vercel (or local without key), use the proxy
                response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ messages: [{ role: "user", content: prompt }] })
                });
            }

            // STRATEGY 2: Direct Call (Dev Fallback - ONLY if key exists and proxy fails/not wanted)
            else {
                // Determine API Key
                const apiKey = MISTRAL_CONFIG.key;

                response = await fetch(MISTRAL_API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: MODEL_ID,
                        messages: [{ role: "user", content: prompt }],
                        temperature: 0.7,
                        max_tokens: 300
                    })
                });
            }

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `API Error: ${response.status}`);
            }

            const data = await response.json();
            return data.choices[0].message.content;

        } catch (error) {
            console.error('AI Request Failed:', error);
            throw error;
        }
    },

    /**
     * Generate Quizzes from arbitrary text
     */
    async generateQuestions(contextText) {
        const prompt = `
You are an expert Exam Setter.
Generate 5 Multiple Choice Questions based on the following text.

**Text Content:**
${contextText.substring(0, 3000)}

**Output Format:**
Return ONLY a valid JSON array. Do not wrap in markdown code blocks.
Format:
[
  {
    "text": "Question text here?",
    "options": [
      {"label": "A", "text": "Option A"},
      {"label": "B", "text": "Option B"},
      {"label": "C", "text": "Option C"},
      {"label": "D", "text": "Option D"}
    ],
    "answer": "A"
  }
]
        `.trim();

        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

        try {
            let response;
            // Reuse same fetch logic as getExplanation
            if (!isLocal || !MISTRAL_CONFIG?.key) {
                response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ messages: [{ role: "user", content: prompt }] })
                });
            } else {
                const apiKey = MISTRAL_CONFIG.key;
                response = await fetch('https://api.mistral.ai/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: 'mistral-tiny',
                        messages: [{ role: "user", content: prompt }],
                        temperature: 0.7,
                        max_tokens: 1500, // Higher token limit for JSON
                        response_format: { type: "json_object" } // Force JSON if supported, else prompt handles it
                    })
                });
            }

            if (!response.ok) throw new Error(`API Error: ${response.status}`);
            const data = await response.json();
            let content = data.choices[0].message.content;

            // Clean up if AI wraps in markdown
            content = content.replace(/```json/g, '').replace(/```/g, '').trim();

            return JSON.parse(content);

        } catch (error) {
            console.error('Quiz Generation Failed:', error);
            throw error;
        }
    }
};
