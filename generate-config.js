const fs = require('fs');

const configContent = `// Generated Config
export const SUPABASE_CONFIG = {
    url: '${process.env.SUPABASE_URL || "https://lunbewlapjoasgqatkco.supabase.co"}',
    anonKey: '${process.env.SUPABASE_ANON_KEY || "YOUR_ANON_KEY_FALLBACK"}'
};

export const MISTRAL_CONFIG = {
    // Key is secure on server (accessed via process.env in /api/chat)
    key: null 
};
`;

fs.writeFileSync('config.js', configContent);
console.log('✅ config.js generated successfully from environment variables');
