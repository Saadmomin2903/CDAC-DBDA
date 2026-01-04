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

            console.log('Extracted Text (first 100 chars):', text.substring(0, 100));

            // Generate Questions
            const questions = await aiLogic.generateQuestions(text);

            // Add ID and metadata to questions
            return {
                id: 'custom_' + Date.now(),
                title: `Quiz: ${sourceName}`,
                created_at: new Date().toISOString(),
                questions: questions
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

        // Limit to first 5 pages to keep context manageable
        const maxPages = Math.min(pdf.numPages, 5);

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
