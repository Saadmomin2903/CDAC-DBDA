import { createLogic } from './create-logic.js';
import { utils } from './supabase-client.js';

export function initLibraryUI() {
    window.addEventListener('render-library', renderLibraryView);
}

function renderLibraryView() {
    const container = document.getElementById('libraryContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="container">
            <div class="library-header" style="text-align: center; margin-bottom: 3rem;">
                <h2 style="font-size: 2.5rem; margin-bottom: 1rem; background: linear-gradient(135deg, var(--primary), var(--accent-teal)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    🧠 AI Study Assistant
                </h2>
                <p style="color: var(--text-secondary); font-size: 1.1rem; max-width: 600px; margin: 0 auto;">
                    Upload your lecture notes, PDFs, or photos of questions. The AI will analyze the content and generate interactive quizzes for you instantly.
                </p>
            </div>

            <!-- Upload Area -->
            <div class="upload-zone" id="uploadZone" 
                style="border: 2px dashed var(--border); border-radius: 1.5rem; padding: 4rem 2rem; text-align: center; cursor: pointer; transition: all 0.2s; background: var(--surface-2); margin-bottom: 4rem; position: relative; overflow: hidden;">
                
                <input type="file" id="fileInput" accept="image/*,.pdf,.txt,.md" style="display: none;">
                
                <div class="upload-content">
                    <div style="font-size: 3.5rem; margin-bottom: 1.5rem; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));">📂</div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Click to upload or drag files here</h3>
                    <p style="color: var(--text-secondary);">Supports Images (OCR), PDF, Text, and Markdown</p>
                </div>
            </div>

            <!-- Custom Quizzes Grid -->
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
                <h3 style="font-size: 1.5rem; font-weight: bold; color: var(--text-primary);">My Custom Collection</h3>
            </div>
            
            <div id="customQuizGrid" class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
                <!-- Quizzes injected here -->
            </div>
        </div>
    `;

    // Event Listeners
    const dropZone = document.getElementById('uploadZone');
    const fileInput = document.getElementById('fileInput');

    dropZone.onclick = () => fileInput.click();
    fileInput.onchange = handleFileSelect;

    // Drag & Drop
    dropZone.ondragover = (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--primary)';
        dropZone.style.background = 'rgba(56, 189, 248, 0.05)';
    };
    dropZone.ondragleave = (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--border)';
        dropZone.style.background = 'var(--surface-2)';
    };
    dropZone.ondrop = (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--border)';
        dropZone.style.background = 'var(--surface-2)';
        if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
    };

    renderQuizList();
}

async function handleFileSelect(e) {
    if (e.target.files.length) await handleFile(e.target.files[0]);
    // Reset input
    e.target.value = '';
}

async function handleFile(file) {
    const dropZone = document.getElementById('uploadZone');
    const content = dropZone.querySelector('.upload-content');

    // Show Loading
    dropZone.style.pointerEvents = 'none';
    content.innerHTML = `
        <div class="loader" style="font-size: 2.5rem; margin-bottom: 1rem; animation: spin 1s linear infinite;">⚙️</div>
        <h3 style="margin-bottom: 0.5rem;">Analyzing Content...</h3>
        <p style="color: var(--text-secondary);">Extracting text & generating questions</p>
    `;

    try {
        const quiz = await createLogic.createQuizFromFile(file);
        saveQuiz(quiz);
        utils.showToast(`Quiz generated successfully!`, "success");
        renderQuizList();
    } catch (error) {
        console.error(error);
        utils.showToast(error.message || "Failed to generate quiz", "error");
    } finally {
        // Reset UI
        dropZone.style.pointerEvents = 'auto';
        content.innerHTML = `
            <div style="font-size: 3.5rem; margin-bottom: 1.5rem; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));">📂</div>
            <h3 style="font-size: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Click to upload or drag files here</h3>
            <p style="color: var(--text-secondary);">Supports Images (OCR), PDF, Text, and Markdown</p>
        `;
    }
}

function saveQuiz(quiz) {
    const quizzes = JSON.parse(localStorage.getItem('custom_quizzes') || '[]');
    quizzes.unshift(quiz);
    localStorage.setItem('custom_quizzes', JSON.stringify(quizzes));
}

function renderQuizList() {
    const quizzes = JSON.parse(localStorage.getItem('custom_quizzes') || '[]');
    const grid = document.getElementById('customQuizGrid');

    if (quizzes.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem; background: var(--surface-1); border-radius: 1rem; border: 1px solid var(--border);">
                <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 1.1rem;">You haven't created any quizzes yet.</p>
                <p style="color: var(--text-tertiary); font-size: 0.9rem;">Upload a file above to get started!</p>
            </div>`;
        return;
    }

    grid.innerHTML = quizzes.map(q => `
        <div class="card card-clickable" onclick="window.startCustomSessionWithId('${q.id}')" style="position: relative;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                <span style="font-size: 2.5rem;">📝</span>
                <button class="btn-icon" onclick="event.stopPropagation(); deleteQuiz('${q.id}')" title="Delete Quiz" style="color: var(--text-tertiary); margin: -0.5rem -0.5rem 0 0;">
                    🗑️
                </button>
            </div>
            <h3 style="font-size: 1.1rem; font-weight: bold; margin-bottom: 0.5rem; line-height: 1.4; color: var(--text-primary); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${q.title}</h3>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
                <span style="color: var(--text-secondary); font-size: 0.875rem;">${q.questions.length} Questions</span>
                <span style="color: var(--text-tertiary); font-size: 0.75rem;">${new Date(q.created_at).toLocaleDateString()}</span>
            </div>
        </div>
    `).join('');

    // Attach global helpers only once
    if (!window.startCustomSessionWithId) {
        window.startCustomSessionWithId = (id) => {
            const currentQuizzes = JSON.parse(localStorage.getItem('custom_quizzes') || '[]');
            const q = currentQuizzes.find(x => x.id === id);
            if (q) window.startCustomSession(q);
        };

        window.deleteQuiz = (id) => {
            if (!confirm('Are you sure you want to delete this quiz?')) return;
            const currentQuizzes = JSON.parse(localStorage.getItem('custom_quizzes') || '[]');
            const newQuizzes = currentQuizzes.filter(x => x.id !== id);
            localStorage.setItem('custom_quizzes', JSON.stringify(newQuizzes));

            // Re-render
            const grid = document.getElementById('customQuizGrid');
            // Quick re-render trigger (or just call renderQuizList again, but be careful of recursion if logic changes)
            // Best to just manually clean DOM or re-call
            renderQuizList(); // Safe here
        };
    }
}
