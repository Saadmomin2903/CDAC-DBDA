// ========================================
// Question Parsing Logic
// ========================================

export function parseQuestionsFromMarkdown(text, moduleId) {
    // Use module-specific parser based on file format
    switch (moduleId) {
        case 'linux':
            return parseLinuxFormat(text);
        case 'bigdata':
            return parseBigDataFormat(text);  // Big Data uses A) B) C) D) format
        case 'dbms':
            return parseDBMSFormat(text);
        case 'python_r':
            return parsePythonRFormat(text);
        case 'english':
        case 'ml':
            return parseSectionedStandardFormat(text); // ML and English use ### sections
        case 'java':
        case 'analytics':
        case 'dv':
        default:
            return parseStandardFormat(text);
    }
}

// Parser for Big Data format (A) B) C) D) with Answer: X)
export function parseBigDataFormat(text) {
    const questions = [];
    const lines = text.split('\n');
    let currentQuestion = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Question: number. Question text
        const questionMatch = line.match(/^(\d+)\.\s+(.+)/);
        if (questionMatch && !line.match(/^[A-D]\)/)) {
            if (currentQuestion && currentQuestion.options.length === 4) {
                questions.push(currentQuestion);
            }

            currentQuestion = {
                number: parseInt(questionMatch[1]),
                text: questionMatch[2],
                options: [],
                answer: null
            };
            continue;
        }

        // Option: A) Option text
        const optionMatch = line.match(/^([A-D])\)\s+(.+)/);
        if (optionMatch && currentQuestion) {
            currentQuestion.options.push({
                label: optionMatch[1],
                text: optionMatch[2]
            });
            continue;
        }

        // Answer: X
        const answerMatch = line.match(/^Answer:\s+([A-D])/);
        if (answerMatch && currentQuestion) {
            currentQuestion.answer = answerMatch[1];
            continue;
        }

        // Continue question text on next line
        if (currentQuestion && currentQuestion.options.length === 0 && line && !line.startsWith('#')) {
            currentQuestion.text += ' ' + line;
        }
    }

    if (currentQuestion && currentQuestion.options.length === 4) {
        questions.push(currentQuestion);
    }

    return questions;
}

// Parser for Linux/Cloud Computing format (Answer: X)
export function parseLinuxFormat(text) {
    const questions = [];
    const lines = text.split('\n');
    let currentQuestion = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Question: number. Question text
        const questionMatch = line.match(/^(\d+)\.\s+(.+)/);
        if (questionMatch && !line.startsWith('A:') && !line.startsWith('B:') && !line.startsWith('C:') && !line.startsWith('D:')) {
            if (currentQuestion) {
                questions.push(currentQuestion);
            }

            currentQuestion = {
                number: parseInt(questionMatch[1]),
                text: questionMatch[2],
                options: [],
                answer: null
            };
            continue;
        }

        // Option: A: Option text
        const optionMatch = line.match(/^([A-D]):\s+(.+)/);
        if (optionMatch && currentQuestion) {
            currentQuestion.options.push({
                label: optionMatch[1],
                text: optionMatch[2]
            });
            continue;
        }

        // Answer: X
        const answerMatch = line.match(/^Answer:\s+([A-D])/);
        if (answerMatch && currentQuestion) {
            currentQuestion.answer = answerMatch[1];
            continue;
        }
    }

    if (currentQuestion) {
        questions.push(currentQuestion);
    }

    return questions;
}

// Parser for DBMS format (Correct Answer: X)
export function parseDBMSFormat(text) {
    const questions = [];
    const lines = text.split('\n');
    let currentQuestion = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Question: number. Question: Question text
        const questionMatch = line.match(/^(\d+)\.\s+Question:\s+(.+)/);
        if (questionMatch) {
            if (currentQuestion) {
                questions.push(currentQuestion);
            }

            currentQuestion = {
                number: parseInt(questionMatch[1]),
                text: questionMatch[2],
                options: [],
                answer: null
            };
            continue;
        }

        // Option: A) Option text
        const optionMatch = line.match(/^([A-D])\)\s+(.+)/);
        if (optionMatch && currentQuestion) {
            currentQuestion.options.push({
                label: optionMatch[1],
                text: optionMatch[2]
            });
            continue;
        }

        // Correct Answer: X
        const answerMatch = line.match(/^Correct Answer:\s+([A-D])/);
        if (answerMatch && currentQuestion) {
            currentQuestion.answer = answerMatch[1];
            continue;
        }
    }

    if (currentQuestion) {
        questions.push(currentQuestion);
    }

    return questions;
}

// Parser for Python/R format (**Correct Answer: X**)
export function parsePythonRFormat(text) {
    const questions = [];
    const lines = text.split('\n');
    let currentQuestion = null;
    let inCodeBlock = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Track code blocks
        if (line.startsWith('```')) {
            inCodeBlock = !inCodeBlock;
            if (currentQuestion && inCodeBlock) {
                currentQuestion.text += '\n' + line;
            }
            continue;
        }

        // Include code block content in question text
        if (inCodeBlock && currentQuestion) {
            currentQuestion.text += '\n' + line;
            continue;
        }

        // Question: **number. Question text**
        const questionMatch = line.match(/^\*\*(\d+)\.\s+(.+)\*\*/);
        if (questionMatch) {
            if (currentQuestion) {
                questions.push(currentQuestion);
            }

            currentQuestion = {
                number: parseInt(questionMatch[1]),
                text: questionMatch[2],
                options: [],
                answer: null
            };
            continue;
        }

        // Option: A. Option text
        const optionMatch = line.match(/^([A-D])\.\s+(.+)/);
        if (optionMatch && currentQuestion && !line.includes('**Correct Answer')) {
            currentQuestion.options.push({
                label: optionMatch[1],
                text: optionMatch[2]
            });
            continue;
        }

        // **Correct Answer: X**
        const answerMatch = line.match(/\*\*Correct Answer:\s+([A-D])\*\*/);
        if (answerMatch && currentQuestion) {
            currentQuestion.answer = answerMatch[1];
            continue;
        }
    }

    if (currentQuestion) {
        questions.push(currentQuestion);
    }

    return questions;
}

// Parser for standard format (ML, Java, Analytics, DV, BigData)
export function parseStandardFormat(text) {
    const questions = [];
    const lines = text.split('\n');
    let currentQuestion = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Skip "Correct Answer:" lines - extract answer but don't include in options
        if (line.startsWith('Correct Answer:')) {
            if (currentQuestion) {
                const answerMatch = line.match(/Correct Answer:\s*([A-D])/);
                if (answerMatch) {
                    currentQuestion.answer = answerMatch[1];
                }
            }
            continue;
        }

        // Question number pattern: starts with a number followed by period
        const questionMatch = line.match(/^(\d+)\.\s+(.+)/);
        if (questionMatch && !line.match(/^([A-D])[\.\)]/)) {
            // Save previous question
            if (currentQuestion) {
                questions.push(currentQuestion);
            }

            // Start new question
            currentQuestion = {
                number: parseInt(questionMatch[1]),
                text: questionMatch[2],
                options: [],
                answer: null
            };
            continue;
        }

        // Option pattern: A. B. C. D. or A) B) C) D)
        const optionMatch = line.match(/^([A-D])[\.\)]\s+(.+)/);
        if (optionMatch && currentQuestion) {
            currentQuestion.options.push({
                label: optionMatch[1],
                text: optionMatch[2]
            });
            continue;
        }

        // Continue multiline content (but not if it's a "Correct Answer" line)
        if (currentQuestion && line && !line.startsWith('#') && !line.startsWith('*') && !line.includes('Correct Answer:')) {
            if (currentQuestion.options.length === 0) {
                currentQuestion.text += ' ' + line;
            } else if (currentQuestion.options.length > 0 && currentQuestion.options.length < 4) {
                const lastOption = currentQuestion.options[currentQuestion.options.length - 1];
                // Don't append if it looks like an answer line got through
                if (!line.startsWith('Correct Answer')) {
                    lastOption.text += ' ' + line;
                }
            }
        }
    }

    // Add last question
    if (currentQuestion) {
        questions.push(currentQuestion);
    }

    return questions;
}

// Parser for English format (**Answer:** pattern with ### sections)
export function parseEnglishFormat(text) {
    const questions = [];
    const lines = text.split('\n');
    let currentQuestion = null;
    let currentSection = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Track section headings (### Section Name)
        const sectionMatch = line.match(/^###\s+(.+?)(?:\s+\(\d+\s+Questions?\))?$/);
        if (sectionMatch) {
            // Extract section name, remove "(30 Questions)" suffix
            currentSection = sectionMatch[1].replace(/\s*\(.*?\)\s*$/, '').trim();
            // Skip correction sections
            if (currentSection.includes('Correction')) {
                currentSection = null;
            }
            continue;
        }

        // Question: **number. Question text**
        const questionMatch = line.match(/^\*\*(\d+)\.\s+(.+?)\*\*$/);
        if (questionMatch) {
            if (currentQuestion && currentQuestion.options.length === 4) {
                questions.push(currentQuestion);
            }

            currentQuestion = {
                number: parseInt(questionMatch[1]),
                text: questionMatch[2],
                options: [],
                answer: null,
                section: currentSection  // Track which section this question belongs to
            };
            continue;
        }

        // Option: A. Option text
        const optionMatch = line.match(/^([A-D])\.\s+(.+)$/);
        if (optionMatch && currentQuestion && currentQuestion.options.length < 4) {
            currentQuestion.options.push({
                label: optionMatch[1],
                text: optionMatch[2]
            });
            continue;
        }

        // Answer: **Answer:** X
        const answerMatch = line.match(/^\*\*Answer:\*\*\s+([A-D])$/);
        if (answerMatch && currentQuestion) {
            currentQuestion.answer = answerMatch[1];
            continue;
        }

        // Continue question text if multiline
        if (currentQuestion && currentQuestion.options.length === 0 && line && !line.startsWith('#') && !line.startsWith('**')) {
            currentQuestion.text += ' ' + line;
        }
    }

    // Add last question
    if (currentQuestion && currentQuestion.options.length === 4) {
        questions.push(currentQuestion);
    }

    return questions;
}

// Parser for ML format (standard format with ### sections)
export function parseSectionedStandardFormat(text) {
    const questions = [];
    const lines = text.split('\n');
    let currentQuestion = null;
    let currentSection = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Track section headings (### Section Name)
        const sectionMatch = line.match(/^###\s+(.+)$/);
        if (sectionMatch) {
            currentSection = sectionMatch[1].trim();
            continue;
        }

        // Skip "Correct Answer:" lines - extract answer but don't include in options
        if (line.startsWith('Correct Answer:')) {
            if (currentQuestion) {
                const answerMatch = line.match(/Correct Answer:\s*([A-D])/);
                if (answerMatch) {
                    currentQuestion.answer = answerMatch[1];
                }
            }
            continue;
        }

        // Question number pattern: starts with a number followed by period
        const questionMatch = line.match(/^(\d+)\.\s+(.+)/);
        if (questionMatch && !line.match(/^([A-D])[\.\)]/)) {
            // Save previous question
            if (currentQuestion) {
                questions.push(currentQuestion);
            }

            // Start new question
            currentQuestion = {
                number: parseInt(questionMatch[1]),
                text: questionMatch[2],
                options: [],
                answer: null,
                section: currentSection  // Track section for this question
            };
            continue;
        }

        // Option pattern: A. B. C. D. or A) B) C) D)
        const optionMatch = line.match(/^([A-D])[\.\)]\s+(.+)/);
        if (optionMatch && currentQuestion) {
            currentQuestion.options.push({
                label: optionMatch[1],
                text: optionMatch[2]
            });
            continue;
        }

        // Continue multiline content
        if (currentQuestion && line && !line.startsWith('#') && !line.startsWith('*') && !line.includes('Correct Answer:')) {
            if (currentQuestion.options.length === 0) {
                currentQuestion.text += ' ' + line;
            } else if (currentQuestion.options.length > 0 && currentQuestion.options.length < 4) {
                const lastOption = currentQuestion.options[currentQuestion.options.length - 1];
                if (!line.startsWith('Correct Answer')) {
                    lastOption.text += ' ' + line;
                }
            }
        }
    }

    // Add last question
    if (currentQuestion) {
        questions.push(currentQuestion);
    }

    return questions;
}
