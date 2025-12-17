// ========================================
// Supabase Integration
// ========================================
import { supabase, db, utils } from './supabase-client.js';
import { getCurrentUser } from './auth-ui.js';
import { parseQuestionsFromMarkdown } from './parser.js';
import { mistakesLogic } from './mistakes-logic.js';
import { examLogic } from './exam-logic.js';
import { leaderboardLogic } from './leaderboard.js';
import { aiLogic } from './ai-logic.js';

// ========================================
// Module Configuration
// ========================================
const MODULES = [
    {
        id: 'ml',
        name: 'Machine Learning',
        icon: '🤖',
        file: './ml_mcqs_final_2000.md',
        description: 'PAC learning, VC Dimension, Bias-Variance trade-off'
    },
    {
        id: 'java',
        name: 'Java Programming',
        icon: '☕',
        file: './Java_MCQ_Bank_2000.md',
        description: 'OOP, Collections, Multithreading, Exception Handling'
    },
    {
        id: 'analytics',
        name: 'Advanced Analytics',
        icon: '📊',
        file: './Advance_analytics.md',
        description: 'Statistical analysis and data modeling'
    },
    {
        id: 'dv',
        name: 'Data Visualization',
        icon: '📈',
        file: './DV.md',
        description: 'Visual representation and dashboard design'
    },
    {
        id: 'python_r',
        name: 'Python & R',
        icon: '🐍',
        file: './Python_R_2000_MCQs.md',
        description: 'Programming fundamentals and data analysis'
    },
    {
        id: 'dbms',
        name: 'Database Management',
        icon: '💾',
        file: './dbms.txt',
        description: 'SQL, normalization, transactions'
    },
    {
        id: 'linux',
        name: 'Linux & Cloud',
        icon: '☁️',
        file: './linux_cloudComputing.md',
        description: 'System administration and cloud platforms'
    },
    {
        id: 'bigdata',
        name: 'Big Data',
        icon: '🗄️',
        file: './big_data_mcqs_2000.md',
        description: 'Hadoop, Spark, distributed computing'
    },
    {
        id: 'english',
        name: 'English - CCEE',
        icon: '📖',
        file: './CDAC_CCEE_English_Question_Bank.md',
        description: 'Grammar, Vocabulary, Sentence Structure, Ordering'
    }
];

// ========================================
// State Management
// ========================================
const state = {
    currentView: 'module',
    currentModule: null,
    currentSection: null,
    currentQuestionIndex: 0,
    questions: [],
    sections: [],
    progress: {},
    bookmarks: {},
    currentUser: null,
    useSupabase: false // Will be set to true when user is authenticated
};

// ========================================
// Initialization
// ========================================
export function initApp() {
    initialize();
    setupEventListeners();
    setupSupabaseListeners();
    setupStatsHandler();
    renderModules();
    renderPractice();
    renderStats();
    // Default Tab
    switchMainTab('modules');
}

// Setup Supabase event listeners
function setupSupabaseListeners() {
    // Listen for user authentication
    window.addEventListener('user-authenticated', async (e) => {
        state.currentUser = e.detail.userId;
        state.useSupabase = true;
        await loadUserDataFromSupabase();
        renderModules();
        renderPractice();
        renderStats();
    });

    // Listen for data migration request
    window.addEventListener('migrate-local-data', async (e) => {
        const { userId, progress, bookmarks } = e.detail;
        await migrateLocalStorageToSupabase(userId, progress, bookmarks);
    });
}

// Process markdown code blocks for syntax highlighting
function processCodeBlocks(text) {
    if (!text) return text;

    // Match code blocks with language specification: ```language\ncode\n```
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;

    let processedText = text.replace(codeBlockRegex, (match, language, code) => {
        const lang = language || 'none';
        const escapedCode = code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        return `<pre class="line-numbers"><code class="language-${lang}">${escapedCode}</code></pre>`;
    });

    // Also handle inline code with single backticks
    processedText = processedText.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

    return processedText;
}

// Initialize the app


// ========================================
// Event Listeners
// ========================================
function setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Search
    document.getElementById('searchBtn').addEventListener('click', openSearch);
    document.getElementById('closeSearch').addEventListener('click', closeSearch);
    document.getElementById('searchInput').addEventListener('input', handleSearch);

    // Navigation
    document.getElementById('backToModules').addEventListener('click', () => showView('module'));
    document.getElementById('backToSections').addEventListener('click', () => showView('section'));

    // Breadcrumb
    document.querySelectorAll('.breadcrumb-item[data-view]').forEach(item => {
        item.addEventListener('click', (e) => {
            const view = e.target.dataset.view;
            if (view === 'home') showView('module');
            else if (view === 'module') showView('section');
        });
    });

    // Question navigation
    document.getElementById('prevQuestion').addEventListener('click', () => navigateQuestion(-1));
    document.getElementById('nextQuestion').addEventListener('click', () => navigateQuestion(1));
    document.getElementById('randomQuestion').addEventListener('click', showRandomQuestion);
    document.getElementById('jumpBtn').addEventListener('click', jumpToQuestion);

    // Question actions
    document.getElementById('showAnswer').addEventListener('click', toggleAnswer);
    document.getElementById('markCompleted').addEventListener('click', markQuestionCompleted);
    document.getElementById('toggleBookmark').addEventListener('click', toggleBookmark);
    document.getElementById('explainAiBtn').addEventListener('click', handleAiExplanation);

    // Close modal on outside click
    document.getElementById('searchModal').addEventListener('click', (e) => {
        if (e.target.id === 'searchModal') closeSearch();
    });
}

// ========================================
// AI Explanation Handler
// ========================================
async function handleAiExplanation() {
    // 1. Check for API Key (Hardcoded in logic)
    // No need to prompt user anymore

    // 2. Prepare Data
    const question = state.questions[state.currentQuestionIndex];
    if (!question) return;

    const btn = document.getElementById('explainAiBtn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '🤖 Thinking...';
    btn.disabled = true;

    try {
        // 3. Call API
        // Find user selected option if any
        const selectedBtn = document.querySelector('.answer-btn.selected');
        const userChoice = selectedBtn ? selectedBtn.dataset.option : null;

        const explanation = await aiLogic.getExplanation(
            question.text,
            question.options,
            question.answer,
            userChoice
        );

        // 4. Show Result in Modal
        showExplanationModal(explanation);

    } catch (error) {
        console.error(error);
        if (error.message === 'INVALID_API_KEY') {
            utils.showToast("Invalid API Key. Please try again.", "error");
            aiLogic.clearApiKey();
        } else {
            utils.showToast("Failed to get explanation. Please check your connection.", "error");
        }
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

function showExplanationModal(markdownText) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.zIndex = '2000';

    // Convert markdown to HTML (basic parsing + Prism)
    const htmlContent = processCodeBlocks(markdownText)
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br>');

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h2>🤖 AI Explanation</h2>
                <button class="btn-ghost" onclick="this.closest('.modal').remove()">✕</button>
            </div>
            <div class="modal-body" style="line-height: 1.6; color: var(--text-primary);">
                ${htmlContent}
            </div>
            <div class="modal-footer" style="margin-top: 2rem; text-align: right;">
                 <button class="btn btn-primary" onclick="this.closest('.modal').remove()">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    if (window.Prism) Prism.highlightAllUnder(modal);
}

// ========================================
// Theme Management
// ========================================
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    const theme = isLight ? 'light' : 'dark'; // Define theme based on isLight
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.getElementById('themeIcon').textContent = theme === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('mcq_theme', isLight ? 'light' : 'dark');
}

// Stats Handler
function setupStatsHandler() {
    window.addEventListener('request-stats', () => {
        let totalCompleted = 0;
        let activeModules = 0;
        const moduleBreakdown = [];

        MODULES.forEach(module => {
            const progress = state.progress[module.id] || {};
            const count = Object.keys(progress).length;

            let correct = 0;
            let wrong = 0;
            let other = 0; // Legacy or just 'completed'

            Object.values(progress).forEach(status => {
                if (status === 'correct') correct++;
                else if (status === 'wrong') wrong++;
                else other++;
            });

            totalCompleted += count;
            if (count > 0) activeModules++;

            moduleBreakdown.push({
                name: module.name,
                completed: count, // Total completed
                correct,
                wrong,
                other,
                total: 2000 // Approximate
            });
        });

        const totalQuestions = MODULES.length * 2000;
        const completionPercentage = totalQuestions > 0 ? Math.round((totalCompleted / totalQuestions) * 100) : 0;

        const statsData = {
            totalCompleted,
            totalQuestions,
            completionPercentage,
            activeModules,
            moduleBreakdown
        };

        // Dispatch to UI
        window.dispatchEvent(new CustomEvent('show-stats-modal', { detail: statsData }));
    });
}

// ========================================
// View Management
// ========================================
function showView(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    // Show selected view
    const viewMap = {
        'module': 'moduleView',
        'section': 'sectionView',
        'question': 'questionView'
    };

    document.getElementById(viewMap[viewName]).classList.add('active');
    state.currentView = viewName;

    // Refresh modules grid if returning to home
    if (viewName === 'module') {
        renderModules();
    }

    // Update breadcrumb
    updateBreadcrumb(viewName);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateBreadcrumb(viewName) {
    const breadcrumb = document.getElementById('breadcrumb');
    const moduleBreadcrumb = document.getElementById('moduleBreadcrumb');
    const sectionBreadcrumb = document.getElementById('sectionBreadcrumb');
    const sectionSeparator = document.getElementById('sectionSeparator');

    if (viewName === 'module') {
        breadcrumb.style.display = 'none';
    } else {
        breadcrumb.style.display = 'flex';

        if (viewName === 'section') {
            moduleBreadcrumb.style.display = 'inline-block';
            moduleBreadcrumb.textContent = state.currentModule.name;
            sectionBreadcrumb.style.display = 'none';
            sectionSeparator.style.display = 'none';
        } else if (viewName === 'question') {
            moduleBreadcrumb.style.display = 'inline-block';
            moduleBreadcrumb.textContent = state.currentModule.name;
            sectionBreadcrumb.style.display = 'inline-block';
        }
    }
}

// ========================================
// Module Management
// ========================================
// ========================================
// Main Tab Navigation
// ========================================
window.switchMainTab = function (tabName) {
    // Update active tab button
    document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));

    // Some tabs correspond to direct IDs like 'navModules'
    const tabMap = {
        'modules': 'navModules',
        'practice': 'navPractice',
        'leaderboard': 'navLeaderboard',
        'stats': 'navStats'
    };
    const navBtn = document.getElementById(tabMap[tabName]);
    if (navBtn) navBtn.classList.add('active');

    // Show/Hide Views
    document.querySelectorAll('.tab-view').forEach(view => view.style.display = 'none');
    document.getElementById(`view-${tabName}`).style.display = 'block';

    // Logic per tab (render if needed)
    if (tabName === 'modules') renderModules();
    if (tabName === 'practice') renderPractice();
    if (tabName === 'leaderboard') renderLeaderboardTab();
    if (tabName === 'stats') renderStats();
};

function renderModules() {
    const grid = document.getElementById('moduleGrid');
    if (!grid) return;
    grid.innerHTML = '';

    MODULES.forEach(module => {
        const progress = calculateModuleProgress(module.id);
        const card = createModuleCard(module, progress);
        grid.appendChild(card);
    });
}

function renderPractice() {
    const grid = document.getElementById('practiceGrid');
    if (!grid) return;
    grid.innerHTML = '';

    // Mistakes Card
    const mistakeCount = mistakesLogic.getMistakeCount(state.progress);
    const mistakesModule = {
        id: 'mistakes',
        name: 'My Mistakes',
        icon: '🎯',
        description: mistakeCount > 0 ? 'Review your wrong answers' : 'Great job! No mistakes found.'
    };
    const card = createModuleCard(mistakesModule, { total: mistakeCount, completed: 0, percentage: 0 });
    card.classList.add('mistakes-card');
    if (mistakeCount === 0) {
        card.style.opacity = '0.7';
        card.querySelector('h3').style.color = 'var(--success)';
    }
    grid.appendChild(card);

    // Exam Card
    const examModule = {
        id: 'exam',
        name: 'Exam Simulation',
        icon: '⏱️',
        description: '50 Questions • 60 Minutes • Random Selection'
    };
    const examCard = createModuleCard(examModule, { completed: 0, total: 50, percentage: 0 });
    examCard.classList.add('exam-card');
    examCard.onclick = () => showExamConfigModal();
    grid.appendChild(examCard);
}

function renderLeaderboardTab() {
    // Default load
    loadLeaderboardData('scorers');
}

function renderStats() {
    const container = document.getElementById('statsContainer');
    if (!container) return;

    // Calculate aggregated stats
    let totalQuestions = 0;
    let completedQuestions = 0;

    // Sum from MODULES
    MODULES.forEach(m => {
        const prog = state.progress[m.id] || {};
        // count valid completions (true, 'correct', 'completed')
        const done = Object.values(prog).filter(s => s !== 'wrong').length;
        completedQuestions += done;
        totalQuestions += 2000; // estimated per module
    });

    const completionPercentage = totalQuestions > 0 ? Math.round((completedQuestions / totalQuestions) * 100) : 0;

    container.innerHTML = `
        <div class="stats-bar" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--spacing-4); margin-bottom: var(--spacing-10);">
            <div class="card" style="text-align: center; padding: var(--spacing-6);">
                <div style="font-size: var(--text-3xl); font-weight: var(--weight-bold); color: var(--primary); margin-bottom: var(--spacing-2);">${completionPercentage}%</div>
                <div style="font-size: var(--text-sm); color: var(--text-secondary); font-weight: var(--weight-medium);">Overall Progress</div>
            </div>
            <div class="card" style="text-align: center; padding: var(--spacing-6);">
                <div style="font-size: var(--text-3xl); font-weight: var(--weight-bold); color: var(--accent-teal); margin-bottom: var(--spacing-2);">${completedQuestions}</div>
                <div style="font-size: var(--text-sm); color: var(--text-secondary); font-weight: var(--weight-medium);">Questions Completed</div>
            </div>
             <div class="card" style="text-align: center; padding: var(--spacing-6);">
                <div style="font-size: var(--text-3xl); font-weight: var(--weight-bold); color: var(--primary-400); margin-bottom: var(--spacing-2);">~16000</div>
                <div style="font-size: var(--text-sm); color: var(--text-secondary); font-weight: var(--weight-medium);">Total Questions</div>
            </div>
        </div>
        
        <div class="card" style="padding: 2rem; text-align: center; margin-top: 2rem;">
            <h3>Detailed Analytics</h3>
            <p style="color: var(--text-secondary); margin-bottom: 1rem;">View detailed breakdown by topic.</p>
            <button class="btn btn-primary" onclick="showStats(event)">Open Dashboard</button>
        </div>
    `;
}

function createModuleCard(module, progress) {
    const card = document.createElement('div');
    card.className = 'card card-clickable';
    card.onclick = () => selectModule(module);

    card.innerHTML = `
        <span class="module-icon" style="font-size: 3rem; display: block; margin-bottom: var(--spacing-4);">${module.icon}</span>
        <h3 style="font-size: var(--text-xl); font-weight: var(--weight-bold); margin-bottom: var(--spacing-2); color: var(--text-primary);">${module.name}</h3>
        <p style="color: var(--text-secondary); font-size: var(--text-sm); margin-bottom: var(--spacing-4);">${module.description}</p>
        <div style="margin-top: var(--spacing-4);">
            <div style="position: relative; margin-bottom: var(--spacing-2);">
                <span style="position: absolute; right: 0; top: -24px; font-size: var(--text-sm); color: var(--text-secondary); font-weight: var(--weight-semibold);">${progress.percentage}%</span>
                <div class="progress-container">
                    <div class="progress-fill" style="width: ${progress.percentage}%"></div>
                </div>
            </div>
            <p style="font-size: var(--text-sm); color: var(--text-secondary);">${progress.completed} of ${progress.total} questions</p>
        </div>
        ${progress.percentage === 100 ? '<span style="display: inline-block; background: var(--success); color: white; padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: var(--text-xs); font-weight: var(--weight-semibold); margin-top: var(--spacing-3);">✓ Completed</span>' : ''}
    `;

    return card;
}

function calculateModuleProgress(moduleId) {
    const moduleProgress = state.progress[moduleId] || {};
    // Only count as completed if status is NOT 'wrong' (counts: 'correct', 'completed', true)
    const completed = Object.values(moduleProgress).filter(status => status !== 'wrong').length;
    const total = 2000; // Each module has ~2000 questions
    const percentage = Math.round((completed / total) * 100);

    return { completed, total, percentage };
}

async function selectModule(module) {
    state.currentModule = module;

    // Show loading state
    showView('section');
    document.getElementById('sectionViewTitle').textContent = 'Loading sections...';
    document.getElementById('sectionGrid').innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">Loading questions...</p>';

    if (module.id === 'mistakes') {
        try {
            const questions = await mistakesLogic.loadMistakeQuestions(state.progress, MODULES);

            if (questions.length === 0) {
                utils.showToast("No mistakes found!", "success");
                showView('module');
                return;
            }

            state.questions = questions;
            state.sections = [{
                title: 'Review Config',
                startIndex: 0,
                endIndex: questions.length
            }];
            renderSections();
        } catch (error) {
            console.error('Error loading mistakes:', error);
            utils.showToast("Error loading mistakes", "error");
            showView('module');
        }
        return;
    }

    try {
        // Load questions from file
        const questions = await loadQuestionsFromFile(module.file, module.id);
        state.questions = questions;

        // Extract sections
        state.sections = extractSections(questions, module);

        // Render sections
        renderSections();
    } catch (error) {
        console.error('Error loading module:', error);
        document.getElementById('sectionGrid').innerHTML = `
            <p style="text-align: center; color: var(--error); padding: 2rem;">
                Error loading questions. Please make sure the file ${module.file} exists.
            </p>
        `;
        showView('modules');
    }
}

// ========================================
// Exam Mode
// ========================================
async function showExamConfigModal() {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.zIndex = '2000';

    // Generate checklist of modules
    const modulesParams = MODULES.map(m => {
        if (m.id === 'mistakes' || m.id === 'exam') return '';
        return `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: var(--surface-2); border-radius: var(--radius-md); border: 1px solid var(--border);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <span>${m.icon}</span>
                    <span style="font-weight: 500;">${m.name}</span>
                </div>
                <input type="checkbox" class="exam-module-checkbox" value="${m.id}" checked style="width: 1.25rem; height: 1.25rem; accent-color: var(--primary);">
            </div>
        `;
    }).join('');

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <div class="modal-header">
                <h2>Configure Exam</h2>
                <button class="btn-ghost" onclick="this.closest('.modal').remove()">✕</button>
            </div>
            <div class="modal-body">
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Select topics to include in your 50-question exam:</p>
                
                <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-bottom: 1rem;">
                    <button class="btn btn-sm btn-ghost" onclick="document.querySelectorAll('.exam-module-checkbox').forEach(c => c.checked = true)">Select All</button>
                    <button class="btn btn-sm btn-ghost" onclick="document.querySelectorAll('.exam-module-checkbox').forEach(c => c.checked = false)">Deselect All</button>
                </div>

                <div style="display: grid; gap: 0.75rem; max-height: 300px; overflow-y: auto; margin-bottom: 2rem;">
                    ${modulesParams}
                </div>

                <div style="display: flex; gap: 1rem;">
                    <button class="btn btn-ghost" style="flex: 1;" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button class="btn btn-primary" style="flex: 2;" id="startExamBtn">Start Exam</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('startExamBtn').onclick = () => {
        const selected = Array.from(document.querySelectorAll('.exam-module-checkbox:checked')).map(c => c.value);
        if (selected.length === 0) {
            utils.showToast("Please select at least one module", "error");
            return;
        }
        modal.remove();
        startExamWithConfig(selected);
    };
}

async function startExamWithConfig(targetModuleIds) {
    // Show loading overlay instead of section view to prevent flash
    const loading = document.createElement('div');
    loading.className = 'modal active';
    loading.innerHTML = '<div class="modal-content" style="text-align:center;"><p class="loading-text">Generating Exam...</p></div>';
    document.body.appendChild(loading);

    try {
        const questions = await examLogic.generateExam(MODULES, targetModuleIds);

        if (questions.length === 0) {
            loading.remove();
            utils.showToast("No questions found for selected modules", "error");
            return;
        }

        state.questions = questions;

        // Setup state for Exam
        state.currentModule = { id: 'exam', name: 'Exam Simulation' };
        state.isExamMode = true;

        // DUMMY SECTION to satisfy renderQuestion logic
        state.sections = [{
            title: 'Full Exam',
            startIndex: 0,
            endIndex: questions.length
        }];
        state.currentSection = state.sections[0]; // Set immediately
        state.currentQuestionIndex = 0; // Start at Q1

        // DIRECTLY GO TO QUESTION VIEW (Skipping Section View Bug)
        loading.remove();
        showView('question');
        renderQuestion();

        // Start Timer
        document.querySelector('.top-bar-stats').style.display = 'none';

        let timerDisplay = document.getElementById('examTimer');
        if (!timerDisplay) {
            timerDisplay = document.createElement('div');
            timerDisplay.id = 'examTimer';
            timerDisplay.className = 'exam-timer';
            document.querySelector('.top-bar-content').appendChild(timerDisplay);
        }
        timerDisplay.style.display = 'block';

        examLogic.startTimer(
            (timeStr) => {
                timerDisplay.textContent = `⏱️ ${timeStr}`;
                if (timeStr === '05:00') timerDisplay.style.color = 'var(--error)';
            },
            () => {
                utils.showToast("Time's up! Submitting exam...", "warning");
                submitExam();
            }
        );

        utils.showToast("Exam Started! Good luck.", "info");

    } catch (error) {
        loading.remove();
        console.error('Error starting exam:', error);
        utils.showToast("Failed to start exam", "error");
    }
}

async function submitExam() {
    examLogic.stopTimer();
    const results = examLogic.calculateScore();

    // Save Result to Leaderboard
    if (state.currentUser) {
        await leaderboardLogic.saveExamResult(results, state.currentUser);
    }

    // Show Results Modal
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content" style="text-align: center;">
            <div class="modal-header">
                <h2>Exam Results</h2>
            </div>
            <div class="modal-body">
                <div style="font-size: 4rem; margin: 1rem 0;">
                    ${results.passed ? '🎉' : '📚'}
                </div>
                <h3 style="color: ${results.passed ? 'var(--success)' : 'var(--error)'}; margin-bottom: 1rem;">
                    ${results.passed ? 'Passed!' : 'Study Harder!'}
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
                    <div class="card">
                        <div style="font-size: 1.5rem; font-weight: bold; color: var(--primary);">${results.percentage}%</div>
                        <div style="font-size: 0.875rem; color: var(--text-secondary);">Score</div>
                    </div>
                    <div class="card">
                        <div style="font-size: 1.5rem; font-weight: bold;">${results.score}/${results.total}</div>
                        <div style="font-size: 0.875rem; color: var(--text-secondary);">Correct</div>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <button class="btn btn-primary" onclick="window.location.reload()">Back to Home</button>
                    ${state.currentUser ? '<button class="btn btn-ghost" onclick="showLeaderboard()">View Leaderboard</button>' : ''}
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// ========================================
// Leaderboard
// ========================================
window.showLeaderboard = async function () {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.zIndex = '2000';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h2>🏆 Leaderboard</h2>
                <button class="btn-ghost" onclick="this.closest('.modal').remove()">✕</button>
            </div>
            <div class="modal-body">
                <div class="leaderboard-tabs" style="display: flex; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border);">
                    <button class="btn-tab active" id="tabScorers" onclick="switchLeaderboardTab('scorers')">Top Scorers</button>
                    <button class="btn-tab" id="tabLearners" onclick="switchLeaderboardTab('learners')">Most Diligent</button>
                </div>
                <div id="leaderboardList" style="min-height: 300px;">
                    <p class="loading-text">Loading champions...</p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    loadLeaderboardData('scorers');
}

window.switchLeaderboardTab = function (type) {
    document.querySelectorAll('.btn-tab').forEach(b => b.classList.remove('active'));
    if (type === 'scorers') document.getElementById('tabScorers').classList.add('active');
    else document.getElementById('tabLearners').classList.add('active');

    loadLeaderboardData(type);
};

async function loadLeaderboardData(type) {
    const container = document.getElementById('leaderboardList');
    container.innerHTML = '<p class="loading-text">Loading...</p>';

    try {
        let data = [];
        if (type === 'scorers') {
            data = await leaderboardLogic.fetchTopScorers();
        } else {
            data = await leaderboardLogic.fetchTopLearners();
        }

        if (data.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No records yet. Be the first! 🚀</p>';
            return;
        }

        container.innerHTML = data.map((item, index) => {
            const isGold = index === 0;
            const rankColor = index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : index === 2 ? '#CD7F32' : 'var(--text-secondary)';
            return `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--surface-2); margin-bottom: 0.5rem; border-radius: var(--radius-md); border: 1px solid ${isGold ? '#FFD700' : 'var(--border)'};">
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div style="font-weight: bold; font-size: 1.25rem; color: ${rankColor}; width: 2rem; text-align: center;">#${index + 1}</div>
                    <div style="width: 2.5rem; height: 2.5rem; border-radius: 50%; background: var(--surface-3); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid var(--border);">
                        ${item.avatar ? `<img src="${item.avatar}" style="width: 100%; height: 100%; object-fit: cover;">` : '👤'}
                    </div>
                    <div>
                        <div style="font-weight: 600;">${item.name}</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary);">${item.subMetric || item.date || ''}</div>
                    </div>
                </div>
                <div style="text-align: right;">
                    <div style="font-weight: bold; color: var(--success); font-size: 1.1rem;">${item.score || item.metric}</div>
                     ${item.percentage ? `<div style="font-size: 0.8rem; color: var(--text-secondary);">${item.percentage}</div>` : ''}
                </div>
            </div>
        `}).join('');

    } catch (e) {
        console.error(e);
        container.innerHTML = '<p class="error-text" style="text-align:center;">Failed to load leaderboard.</p>';
    }
}

// ========================================
// Question Loading & Parsing
// ========================================
async function loadQuestionsFromFile(filename, moduleId) {
    try {
        const response = await fetch(filename);
        const text = await response.text();
        return parseQuestionsFromMarkdown(text, moduleId);
    } catch (error) {
        console.error('Error fetching file:', error);
        throw error;
    }
}

// Parsing logic refactored to parser.js

function extractSections(questions, module) {
    // For modules with explicit section markers
    if (module.id === 'ml') {
        return extractMLSections(questions);
    }

    if (module.id === 'english') {
        return extractEnglishSections(questions);
    }

    // For other modules, create sections by question ranges
    const sections = [];
    const questionsPerSection = 200;
    const totalSections = Math.ceil(questions.length / questionsPerSection);

    for (let i = 0; i < totalSections; i++) {
        const start = i * questionsPerSection;
        const end = Math.min(start + questionsPerSection, questions.length);

        sections.push({
            id: `section_${i + 1} `,
            name: `Section ${i + 1} `,
            range: `Q${start + 1} - Q${end} `,
            startIndex: start,
            endIndex: end,
            count: end - start
        });
    }

    return sections;
}

function extractMLSections(questions) {
    // ML module has topic-based sections
    const sectionSize = 100;
    const sections = [];

    for (let i = 0; i < questions.length; i += sectionSize) {
        const end = Math.min(i + sectionSize, questions.length);
        sections.push({
            id: `ml_section_${sections.length + 1} `,
            name: `Questions ${i + 1} -${end} `,
            range: `Q${i + 1} - Q${end} `,
            startIndex: i,
            endIndex: end,
            count: end - i
        });
    }

    return sections;
}

function extractEnglishSections(questions) {
    // English module has topic-based sections marked by section property in each question
    // Group questions by section
    const sectionMap = new Map();

    questions.forEach((question, index) => {
        if (question.section) {
            if (!sectionMap.has(question.section)) {
                sectionMap.set(question.section, []);
            }
            sectionMap.get(question.section).push(index);
        }
    });

    // Convert map to sections array
    const sections = [];
    let currentIndex = 0;

    for (const [sectionName, indices] of sectionMap) {
        if (indices.length > 0) {
            const startIndex = indices[0];
            const endIndex = indices[indices.length - 1] + 1;

            sections.push({
                id: `english_${sectionName.replace(/\s+/g, '_').toLowerCase()}`,
                name: sectionName,
                range: `Q${startIndex + 1} - Q${endIndex}`,
                startIndex: startIndex,
                endIndex: endIndex,
                count: indices.length
            });
        }
    }

    return sections;
}

// ========================================
// Section Management
// ========================================
function renderSections() {
    document.getElementById('sectionViewTitle').textContent = `${state.currentModule.name} - Sections`;
    document.getElementById('sectionViewSubtitle').textContent = `${state.sections.length} sections • ${state.questions.length} questions`;

    const grid = document.getElementById('sectionGrid');
    grid.innerHTML = '';

    state.sections.forEach(section => {
        const card = createSectionCard(section, state.currentModule.id);
        grid.appendChild(card);
    });
}

function createSectionCard(section, moduleId) {
    const card = document.createElement('div');
    card.className = 'card card-clickable';
    card.onclick = () => selectSection(section);

    const progress = calculateSectionProgress(section);
    const statusColor = progress.percentage === 100 ? 'var(--success)' :
        progress.percentage > 0 ? 'var(--primary)' : 'var(--text-tertiary)';

    card.innerHTML = `
        <h3 style="font-size: var(--text-lg); font-weight: var(--weight-semibold); margin-bottom: var(--spacing-2); color: var(--text-primary);">${section.name}</h3>
        <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--spacing-3);">Questions ${section.startIndex + 1}-${section.endIndex}</p>
        <div class="progress-container" style="margin-bottom: var(--spacing-2);">
            <div class="progress-fill" style="width: ${progress.percentage}%"></div>
        </div>
        <p style="font-size: var(--text-sm); color: var(--text-secondary);">${progress.completed} of ${progress.total} completed</p>
        ${progress.percentage === 100 ? '<span style="display: inline-block; background: var(--success); color: white; padding: 0.25rem 0.5rem; border-radius: var(--radius-sm); font-size: var(--text-xs); font-weight: var(--weight-semibold); margin-top: var(--spacing-2);">✓ Complete</span>' : ''}
    `;

    return card;
}

function calculateSectionProgress(section) {
    const moduleProgress = state.progress[state.currentModule.id] || {};
    let completed = 0;

    for (let i = section.startIndex; i < section.endIndex; i++) {
        // Count as completed if it exists in progress (true, 'correct', 'wrong', etc)
        // Adjust logic if you only want 'correct' to count
        if (moduleProgress[i]) completed++;
    }

    const total = section.endIndex - section.startIndex;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { completed, total, percentage };
}

function selectSection(section) {
    state.currentSection = section;
    state.currentQuestionIndex = section.startIndex;
    showView('question');
    renderQuestion();
}

// ========================================
// Question Display
// ========================================
function renderQuestion() {
    const question = state.questions[state.currentQuestionIndex];
    if (!question) return;

    // Update question number badge
    document.getElementById('questionNumber').textContent = `Q${question.number} `;

    // Process question text for code blocks and update content
    const processedText = processCodeBlocks(question.text);
    document.getElementById('questionContent').innerHTML = processedText;

    // Toggle Exam Elements
    const isExam = state.isExamMode;
    const hideStyle = isExam ? 'none' : 'inline-block';

    // Toggle Bookmark Button
    const toggleBookmarkBtn = document.getElementById('toggleBookmark');
    toggleBookmarkBtn.style.display = hideStyle;

    // Toggle Action Buttons
    const showAnswerBtn = document.getElementById('showAnswer');
    const markCompletedBtn = document.getElementById('markCompleted');
    const submitExamBtn = document.getElementById('submitExamBtn');

    if (showAnswerBtn) showAnswerBtn.style.display = hideStyle;
    if (markCompletedBtn) markCompletedBtn.style.display = hideStyle;
    if (submitExamBtn) submitExamBtn.style.display = isExam ? 'inline-block' : 'none'; // Only show in Exam Mode

    if (!isExam) {
        // Normal Mode: Update Bookmark Text
        const isBookmarked = isQuestionBookmarked();
        toggleBookmarkBtn.textContent = isBookmarked ? '⭐ Bookmarked' : '⭐ Bookmark';
    }

    // Render answer buttons
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = question.options.map(option => {
        let extraClass = '';
        let icon = '';

        if (isExam) {
            // Exam Mode: Check if previously selected
            if (examLogic.userAnswers[state.currentQuestionIndex] === option.label) {
                extraClass = 'selected';
            }
        } else {
            // Normal Mode: Check if correct/wrong
            icon = option.label === question.answer ? '✓' : '✗';
        }

        return `
            <button class="answer-btn ${extraClass}" data-option="${option.label}">
            <span class="answer-label">${option.label}</span>
            <span class="answer-text">${processCodeBlocks(option.text)}</span>
            ${!isExam ? `<span class="answer-icon">${icon}</span>` : ''}
        </button>
            `;
    }).join('');

    // Apply Prism highlighting after content is added to DOM
    if (window.Prism) {
        Prism.highlightAll();
    }

    // Update navigation buttons
    const isFirst = state.currentQuestionIndex === state.currentSection.startIndex;
    const isLast = state.currentQuestionIndex === state.currentSection.endIndex - 1;

    document.getElementById('prevQuestion').disabled = isFirst;
    document.getElementById('nextQuestion').disabled = isLast;

    // Apply Prism highlighting after content is added to DOM
    if (window.Prism) {
        Prism.highlightAllUnder(answersContainer);
    }

    // Add click handlers
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {

            // EXAM MODE LOGIC
            if (state.isExamMode) {
                // Remove selection from other options
                document.querySelectorAll('.answer-btn').forEach(opt => {
                    opt.classList.remove('selected');
                });

                // Select this one
                this.classList.add('selected');

                // Save Answer
                examLogic.userAnswers[state.currentQuestionIndex] = this.dataset.option;
                return;
            }

            // NORMAL MODE LOGIC
            // Check if answer is already revealed
            if (this.classList.contains('correct') || this.classList.contains('wrong')) {
                return; // Locked, do nothing
            }

            // Remove selection from other options
            document.querySelectorAll('.answer-btn').forEach(opt => {
                opt.classList.remove('selected');
            });

            // Mark this option as selected
            this.classList.add('selected');
        });

        // Double-click to lock and check answer (DISABLED IN EXAM MODE)
        if (!state.isExamMode) {
            btn.addEventListener('dblclick', function (e) {
                if (this.classList.contains('correct') || this.classList.contains('wrong')) {
                    return; // Already locked
                }

                const selectedOption = this.dataset.option;
                const question = state.questions[state.currentQuestionIndex];

                // Lock all options
                document.querySelectorAll('.answer-btn').forEach(opt => {
                    opt.style.pointerEvents = 'none';
                });

                // Check if correct
                if (question.answer && selectedOption === question.answer) {
                    this.classList.add('correct');
                    this.classList.remove('selected');
                    markQuestionCompleted('correct');
                } else {
                    this.classList.add('wrong');
                    this.classList.remove('selected');

                    // Also highlight the correct answer
                    if (question.answer) {
                        document.querySelectorAll('.answer-btn').forEach(opt => {
                            if (opt.dataset.option === question.answer) {
                                opt.classList.add('correct');
                            }
                        });
                    }
                    markQuestionCompleted('wrong');
                }
            });
        }
    });

    // Hide answer
    document.getElementById('answerReveal').style.display = 'none';

    // Update progress (skip in exam mode?)
    updateQuestionProgress();

    // Update mark completed button
    if (!isExam) updateMarkCompletedButton();
}

// Removed - now handled inline in renderQuestion

function navigateQuestion(direction) {
    const newIndex = state.currentQuestionIndex + direction;

    if (newIndex >= state.currentSection.startIndex && newIndex < state.currentSection.endIndex) {
        state.currentQuestionIndex = newIndex;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * (state.currentSection.endIndex - state.currentSection.startIndex)) + state.currentSection.startIndex;
    state.currentQuestionIndex = randomIndex;
    renderQuestion();
}

function jumpToQuestion() {
    const input = document.getElementById('jumpInput');
    const questionNum = parseInt(input.value);

    if (questionNum) {
        // Find question by number
        const index = state.questions.findIndex(q => q.number === questionNum);

        if (index >= state.currentSection.startIndex && index < state.currentSection.endIndex) {
            state.currentQuestionIndex = index;
            renderQuestion();
            input.value = '';
        } else {
            alert('Question number not in current section!');
        }
    }
}

function toggleAnswer() {
    const answerReveal = document.getElementById('answerReveal');
    const btn = document.getElementById('showAnswer');

    if (answerReveal.style.display === 'none') {
        const question = state.questions[state.currentQuestionIndex];

        if (!question.answer) {
            // All modules now have answers, so this is just a specific question issue
            const message = 'Answer not available for this specific question.';

            document.getElementById('answerText').innerHTML = `< em style = "color: var(--text-secondary);" > ${message}</em > `;
            answerReveal.style.display = 'block';
            answerReveal.style.background = 'rgba(255, 184, 77, 0.08)';
            answerReveal.style.borderColor = 'var(--warning)';
            answerReveal.querySelector('h4').textContent = 'Notice';
            answerReveal.querySelector('h4').style.color = 'var(--warning)';
            btn.textContent = 'Hide Notice';
            return;
        }

        // Find the correct option
        const correctOption = question.options.find(opt => opt.label === question.answer);

        if (correctOption) {
            document.getElementById('answerText').innerHTML = `< strong > ${correctOption.label}.</strong > ${correctOption.text} `;
            answerReveal.style.display = 'block';
            answerReveal.style.background = 'rgba(0, 230, 118, 0.08)';
            answerReveal.style.borderColor = 'var(--border-success)';
            answerReveal.querySelector('h4').textContent = 'Correct Answer';
            answerReveal.querySelector('h4').style.color = 'var(--success)';
            btn.textContent = 'Hide Answer';

            // Highlight correct option
            document.querySelectorAll('.answer-btn').forEach(btn => {
                if (btn.dataset.option === question.answer) {
                    btn.classList.add('correct');
                    btn.style.pointerEvents = 'none';
                }
            });
        }
    } else {
        answerReveal.style.display = 'none';
        btn.textContent = 'Show Answer';

        // Remove highlights
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.classList.remove('correct');
            btn.style.pointerEvents = '';
        });
    }
}

// Mark current question as completed
async function markQuestionCompleted(status = null) {
    let moduleId = state.currentModule.id;
    let questionIndex = state.currentQuestionIndex;

    // Fix: If in Mistakes module, update the ORIGINAL module instead!
    if (moduleId === 'mistakes') {
        const question = state.questions[questionIndex];
        if (question && question.originalModuleId) {
            moduleId = question.originalModuleId;
            questionIndex = question.originalIndex;
            // Also update local tracking for UI reflection
            // (We don't want to save 'mistakes' module to DB)
        }
    }

    if (!state.progress[moduleId]) {
        state.progress[moduleId] = {};
    }

    const currentStatus = state.progress[moduleId][questionIndex];
    let newStatus = status;

    // If status forced (from auto-check), set it. if manual toggle, flip it.
    if (!status) {
        if (currentStatus) {
            delete state.progress[moduleId][questionIndex];
            if (state.useSupabase && state.currentUser) {
                await db.deleteProgress(state.currentUser, moduleId, questionIndex);
            }
        } else {
            newStatus = 'completed';
            state.progress[moduleId][questionIndex] = newStatus;
            if (state.useSupabase && state.currentUser) {
                await db.saveProgress(state.currentUser, moduleId, questionIndex, newStatus);
            }
        }
    } else {
        // Force set status
        state.progress[moduleId][questionIndex] = newStatus;
        if (state.useSupabase && state.currentUser) {
            await db.saveProgress(state.currentUser, moduleId, questionIndex, newStatus);
        }
    }

    // Save to localStorage fallback
    if (!state.useSupabase || !state.currentUser) {
        localStorage.setItem('mcq_progress', JSON.stringify(state.progress));
    }

    // Update UI
    updateMarkCompletedButton();
    updateQuestionProgress();
    updateOverallProgress();
}
function updateMarkCompletedButton() {
    const btn = document.getElementById('markCompleted');
    const isCompleted = state.progress[state.currentModule.id]?.[state.currentQuestionIndex];

    btn.textContent = isCompleted ? '✓ Completed' : 'Mark as Completed';
    btn.style.background = isCompleted ? 'var(--success)' : '';
}

async function toggleBookmark() {
    const moduleId = state.currentModule.id;
    const questionIndex = state.currentQuestionIndex;
    const key = `${moduleId}_${questionIndex} `;

    const isBookmarked = state.bookmarks[key];

    if (isBookmarked) {
        delete state.bookmarks[key];
    } else {
        state.bookmarks[key] = true;
    }

    // Save to Supabase or localStorage
    if (state.useSupabase && state.currentUser) {
        try {
            if (isBookmarked) {
                await db.deleteBookmark(state.currentUser, moduleId, questionIndex);
            } else {
                await db.saveBookmark(state.currentUser, moduleId, questionIndex);
            }
        } catch (error) {
            console.error('Error saving bookmark:', error);
            utils.showToast('Error saving bookmark', 'error');
        }
    } else {
        // Fallback to localStorage
        localStorage.setItem('mcq_bookmarks', JSON.stringify(state.bookmarks));
    }

    // Update UI
    const newIsBookmarked = state.bookmarks[key];
    document.getElementById('bookmarkIndicator').style.display = newIsBookmarked ? 'block' : 'none';
    document.getElementById('toggleBookmark').textContent = newIsBookmarked ? '⭐ Bookmarked' : '⭐ Bookmark';
}

function isQuestionBookmarked() {
    const key = `${state.currentModule.id}_${state.currentQuestionIndex} `;
    return state.bookmarks[key] || false;
}

function updateQuestionProgress() {
    const completed = calculateSectionProgress(state.currentSection);
    const total = state.currentSection.count;
    const percentage = Math.round((completed / total) * 100);

    // Update progress bar (v2 uses sectionProgress)
    const progressBar = document.getElementById('sectionProgress');
    if (progressBar) {
        progressBar.style.width = `${percentage}% `;
    }
}

// ========================================
// Overall Progress
// ========================================
function updateOverallProgress() {
    let totalCompleted = 0;

    Object.values(state.progress).forEach(moduleProgress => {
        totalCompleted += Object.values(moduleProgress).filter(s => s !== 'wrong').length;
    });

    const totalQuestions = MODULES.length * 2000; // Approximate
    const percentage = Math.round((totalCompleted / totalQuestions) * 100);

    // Update Header Stats
    if (document.getElementById('totalProgress')) {
        document.getElementById('totalProgress').textContent = `${percentage}% `;
    }
    if (document.getElementById('totalCompleted')) {
        document.getElementById('totalCompleted').textContent = totalCompleted;
    }

    // Update Dashboard Stats (if visible)
    if (document.getElementById('overallProgress')) {
        document.getElementById('overallProgress').textContent = `${percentage}% `;
    }
    if (document.getElementById('completedQuestions')) {
        document.getElementById('completedQuestions').textContent = totalCompleted;
    }
}

// ========================================
// Search
// ========================================
function openSearch() {
    document.getElementById('searchModal').classList.add('active');
    document.getElementById('searchInput').focus();
}

function closeSearch() {
    document.getElementById('searchModal').classList.remove('active');
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '<p class="search-placeholder">Type to search across 16,000+ questions</p>';
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    const results = document.getElementById('searchResults');

    if (query.length < 3) {
        results.innerHTML = '<p class="search-placeholder">Type at least 3 characters to search</p>';
        return;
    }

    // Search in current questions (if loaded)
    if (state.questions.length > 0) {
        const matches = state.questions
            .filter(q => q.text.toLowerCase().includes(query))
            .slice(0, 10);

        if (matches.length > 0) {
            results.innerHTML = matches.map(q => `
            < div class="search-result-item" onclick = "jumpToSearchResult(${q.number})" >
                    <div class="search-result-module">${state.currentModule.name}</div>
                    <div class="search-result-text">Q${q.number}: ${q.text.substring(0, 100)}...</div>
                </div >
            `).join('');
        } else {
            results.innerHTML = '<p class="search-placeholder">No results found</p>';
        }
    } else {
        results.innerHTML = '<p class="search-placeholder">Please select a module first to search</p>';
    }
}

function jumpToSearchResult(questionNumber) {
    closeSearch();

    const index = state.questions.findIndex(q => q.number === questionNumber);
    if (index !== -1) {
        // Find which section this question belongs to
        const section = state.sections.find(s => index >= s.startIndex && index < s.endIndex);
        if (section) {
            state.currentSection = section;
            state.currentQuestionIndex = index;
            showView('question');
            renderQuestion();
        }
    }
}

// ========================================
// AI Learning Assistant
// ========================================
function openAIChat() {
    const panel = document.getElementById('aiChatPanel');
    panel.classList.remove('collapsed');

    // Clear previous chat except welcome message
    const messagesContainer = document.getElementById('aiChatMessages');
    const welcomeMessage = messagesContainer.querySelector('.ai-welcome-message');
    messagesContainer.innerHTML = '';
    messagesContainer.appendChild(welcomeMessage);
}

function closeAIChat() {
    const panel = document.getElementById('aiChatPanel');
    panel.classList.add('collapsed');
}

async function sendAIMessage(customQuery = null) {
    const input = document.getElementById('aiChatInput');
    const query = customQuery || input.value.trim();

    if (!query) return;

    // Clear input if not using suggestion
    if (!customQuery) {
        input.value = '';
    }

    // Add user message to chat
    addChatMessage(query, 'user');

    // Show loading state
    const sendBtn = document.getElementById('aiSendBtn');
    const sendBtnText = document.getElementById('sendBtnText');
    const sendBtnLoader = document.getElementById('sendBtnLoader');

    sendBtn.disabled = true;
    sendBtnText.style.display = 'none';
    sendBtnLoader.style.display = 'inline-block';

    // Add loading message
    const loadingMsg = addChatMessage('Thinking...', 'assistant', true);

    try {
        const question = state.questions[state.currentQuestionIndex];

        const response = await fetch('/api/ai-explain', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: question.text,
                options: question.options,
                correctAnswer: question.answer,
                module: state.currentModule.name,
                userQuery: query
            })
        });

        if (!response.ok) {
            throw new Error('Failed to get AI response');
        }

        const data = await response.json();

        // Remove loading message
        loadingMsg.remove();

        // Add AI response
        addChatMessage(data.explanation, 'assistant');

    } catch (error) {
        console.error('AI Error:', error);
        loadingMsg.remove();
        addChatMessage('Sorry, I encountered an error. Please try again.', 'assistant');
    } finally {
        // Reset button state
        sendBtn.disabled = false;
        sendBtnText.style.display = 'inline';
        sendBtnLoader.style.display = 'none';
    }
}

function addChatMessage(text, type, isLoading = false) {
    const messagesContainer = document.getElementById('aiChatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai - message ${type} `;

    if (isLoading) {
        messageDiv.classList.add('loading');
    }

    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    return messageDiv;
}

// ========================================
// Supabase Integration Functions
// ========================================

// Load user data from Supabase
async function loadUserDataFromSupabase() {
    if (!state.currentUser) return;

    try {
        // Load progress
        const { data: progressData, error: progressError } = await db.getProgress(state.currentUser);
        if (progressError) throw progressError;

        // Convert progress array to object format
        state.progress = {};
        if (progressData) {
            progressData.forEach(item => {
                if (!state.progress[item.module_id]) {
                    state.progress[item.module_id] = {};
                }
                state.progress[item.module_id][item.question_index] = item.status || 'completed';
            });
        }

        // Load bookmarks
        const { data: bookmarksData, error: bookmarksError } = await db.getBookmarks(state.currentUser);
        if (bookmarksError) throw bookmarksError;

        // Convert bookmarks array to object format
        state.bookmarks = {};
        if (bookmarksData) {
            bookmarksData.forEach(item => {
                const key = `${item.module_id}_${item.question_index} `;
                state.bookmarks[key] = true;
            });
        }

        console.log('User data loaded from Supabase');
        updateOverallProgress();
        renderModules();
    } catch (error) {
        console.error('Error loading user data:', error);
        utils.showToast('Error loading your data', 'error');
    }
}

// Migrate localStorage data to Supabase
async function migrateLocalStorageToSupabase(userId, progress, bookmarks) {
    try {
        let migratedCount = 0;

        // Migrate progress
        for (const moduleId in progress) {
            for (const questionIndex in progress[moduleId]) {
                await db.saveProgress(userId, moduleId, parseInt(questionIndex));
                migratedCount++;
            }
        }

        // Migrate bookmarks
        for (const key in bookmarks) {
            const [moduleId, questionIndex] = key.split('_');
            await db.saveBookmark(userId, moduleId, parseInt(questionIndex));
            migratedCount++;
        }

        if (migratedCount > 0) {
            utils.showToast(`Migrated ${migratedCount} items to cloud!`, 'success');

            // Clear localStorage after successful migration
            localStorage.removeItem('mcq_progress');
            localStorage.removeItem('mcq_bookmarks');

            // Reload data from Supabase
            await loadUserDataFromSupabase();
        }
    } catch (error) {
        console.error('Error migrating data:', error);
        utils.showToast('Error migrating data. Your local data is safe.', 'error');
    }
}

// Initialize - check for existing user and load data
function initialize() {
    // Check for saved theme
    const savedTheme = localStorage.getItem('mcq_theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('themeIcon').textContent = '☀️';
    }

    // Load from localStorage if not authenticated
    if (!state.useSupabase) {
        state.progress = JSON.parse(localStorage.getItem('mcq_progress')) || {};
        state.bookmarks = JSON.parse(localStorage.getItem('mcq_bookmarks')) || {};
    }
}
