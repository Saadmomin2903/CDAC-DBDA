// Vercel Serverless Function to proxy Mistral API requests
// This runs on the server, so the API Key is safe here.

export default async function handler(req, res) {
    // 1. Validate Method
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // 2. Get API Key from Server Environment
    const apiKey = process.env.MISTRAL_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ message: 'Server Configuration Error: API Key missing' });
    }

    // 3. Forward request to Mistral
    try {
        const { messages } = req.body; // Expecting { messages: [...] } from client

        const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'mistral-tiny',
                messages: messages,
                temperature: 0.7,
                max_tokens: 300
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ message: data.message || 'Mistral API Error' });
        }

        // 4. Return result to client
        return res.status(200).json(data);

    } catch (error) {
        console.error('Proxy Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
