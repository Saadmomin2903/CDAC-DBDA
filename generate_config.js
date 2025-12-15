const fs = require('fs');

const config = `export const SUPABASE_CONFIG = {
    url: '${process.env.SUPABASE_URL || ""}',
    anonKey: '${process.env.SUPABASE_ANON_KEY || ""}'
};`;

fs.writeFileSync('./config.js', config);
console.log('✅ Generated config.js from environment variables');
