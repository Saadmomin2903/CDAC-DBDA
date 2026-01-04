import { aiLogic } from './ai-logic.js';

export const createLogic = {
    /**
     * Master function to process file and generate quiz
     */
    async createQuizFromFile(file) {
        const fileType = file.type;
        let text = '';
        let sourceName = file.name;

        console.log('Processing file:', file.name, fileType);

        try {
            if (fileType.startsWith('image/')) {
                text = await this.extractTextFromImage(file);
            } else if (fileType === 'application/pdf') {
                text = await this.extractTextFromPDF(file);
            } else if (fileType === 'text/plain' || fileType === 'text/markdown') {
                text = await this.readTextFile(file);
            } else {
                throw new Error('Unsupported file type. Please upload Image, PDF, or Text.');
            }

            if (!text || text.length < 50) {
                throw new Error('Could not extract enough text from file.');
            }

            console.log('Extracted Text Length:', text.length);

            // Chunking Strategy for Large Files
            // Split text into chunks of ~3500 characters to stay within AI context limits
            const CHUNK_SIZE = 3500;
            const OVERLAP = 200; // Overlap to prevent splitting questions
            const chunks = [];

            for (let i = 0; i < text.length; i += (CHUNK_SIZE - OVERLAP)) {
                chunks.push(text.substring(i, i + CHUNK_SIZE));
            }

            let allQuestions = [];

            // Process chunks
            for (let i = 0; i < chunks.length; i++) {
                const chunk = chunks[i];
                console.log(`Processing Chunk ${i + 1}/${chunks.length}`);

                // Show progress toast
                if (window.utils && window.utils.showToast) {
                    utils.showToast(`Analyzing Part ${i + 1} of ${chunks.length}...`, 'info', 2000);
                }

                try {
                    const chunkQuestions = await aiLogic.generateQuestions(chunk);
                    if (Array.isArray(chunkQuestions)) {
                        allQuestions = allQuestions.concat(chunkQuestions);
                    }
                } catch (err) {
                    console.warn(`Failed to process chunk ${i + 1}`, err);
                    // Continue to next chunk even if one fails
                }
            }

            if (allQuestions.length === 0) {
                throw new Error("No questions could be generated from the document.");
            }

            // Shuffle questions to mix them up
            allQuestions = allQuestions.sort(() => Math.random() - 0.5);

            // Add ID and metadata to questions
            return {
                id: 'custom_' + Date.now(),
                title: `Quiz: ${sourceName} (${allQuestions.length} Qs)`,
                created_at: new Date().toISOString(),
                questions: allQuestions
            };

        } catch (error) {
            console.error('File Processing Error:', error);
            throw error;
        }
    },

    /**
     * OCR using Tesseract.js (Global from CDN)
     */
    async extractTextFromImage(file) {
        if (!window.Tesseract) throw new Error('OCR Library not loaded');

        const worker = await Tesseract.createWorker('eng');
        const ret = await worker.recognize(file);
        await worker.terminate();
        return ret.data.text;
    },

    /**
     * PDF Text Extraction using PDF.js (Global from CDN)
     */
    async extractTextFromPDF(file) {
        if (!window.pdfjsLib) throw new Error('PDF Library not loaded');

        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
        let fullText = '';

        // Read ALL pages
        const maxPages = pdf.numPages;

        for (let i = 1; i <= maxPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map(item => item.str).join(' ');
            fullText += pageText + '\n';
        }
        return fullText;
    },

    /**
     * Simple Text Reading
     */
    readTextFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (e) => reject(e);
            reader.readAsText(file);
        });
    }
};
