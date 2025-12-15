// Authentication UI Components
import { auth, utils } from './supabase-client.js';

// State
let currentUser = null;

// Initialize auth UI
export function initAuthUI() {
    createAuthModals();
    setupAuthListeners();
    checkAuthState();
}

// Create auth modals
function createAuthModals() {
    const modalsHTML = `
    <!-- Login Modal -->
    <div id="loginModal" class="auth-modal">
      <div class="auth-modal-content">
        <div class="auth-modal-header">
          <h2>Welcome Back</h2>
          <button class="auth-close" onclick="closeLoginModal()">×</button>
        </div>
        <form id="loginForm" class="auth-form">
          <div class="form-group">
            <label for="loginEmail">Email</label>
            <input type="email" id="loginEmail" required placeholder="your@email.com">
          </div>
          <div class="form-group">
            <label for="loginPassword">Password</label>
            <input type="password" id="loginPassword" required placeholder="••••••••">
          </div>
          <button type="submit" class="btn btn-primary btn-full">Sign In</button>
          <div class="auth-links">
            <a href="#" onclick="showForgotPassword(event)">Forgot password?</a>
            <a href="#" onclick="switchToSignup(event)">Create account</a>
          </div>
        </form>
      </div>
    </div>

    <!-- Signup Modal -->
    <div id="signupModal" class="auth-modal">
      <div class="auth-modal-content">
        <div class="auth-modal-header">
          <h2>Create Account</h2>
          <button class="auth-close" onclick="closeSignupModal()">×</button>
        </div>
        <form id="signupForm" class="auth-form">
          <div class="form-group">
            <label for="signupName">Full Name</label>
            <input type="text" id="signupName" required placeholder="John Doe">
          </div>
          <div class="form-group">
            <label for="signupEmail">Email</label>
            <input type="email" id="signupEmail" required placeholder="your@email.com">
          </div>
          <div class="form-group">
            <label for="signupPassword">Password</label>
            <input type="password" id="signupPassword" required placeholder="••••••••" minlength="6">
          </div>
          <button type="submit" class="btn btn-primary btn-full">Create Account</button>
          <div class="auth-links">
            <a href="#" onclick="switchToLogin(event)">Already have an account?</a>
          </div>
        </form>
      </div>
    </div>

    `;

    document.body.insertAdjacentHTML('beforeend', modalsHTML);
}

// Setup event listeners
function setupAuthListeners() {
    // Login form
    document.getElementById('loginForm').addEventListener('submit', handleLogin);

    // Signup form
    document.getElementById('signupForm').addEventListener('submit', handleSignup);

    // Auth state changes
    auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN') {
            currentUser = session.user;
            updateUIForAuthState(true);
            loadUserData();
        } else if (event === 'SIGNED_OUT') {
            currentUser = null;
            updateUIForAuthState(false);
        }
    });
}

// Check initial auth state
async function checkAuthState() {
    const { session } = await auth.getSession();
    if (session) {
        currentUser = session.user;
        updateUIForAuthState(true);
        loadUserData();
    } else {
        updateUIForAuthState(false);
    }
}

// Handle login
async function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const btn = e.target.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Signing in...';

    const { data, error } = await auth.signIn(email, password);

    if (error) {
        utils.handleError(error, 'Login');
        btn.disabled = false;
        btn.textContent = 'Sign In';
    } else {
        utils.showToast('Welcome back!', 'success');
        closeLoginModal();
        // Migrate localStorage data if exists
        await migrateLocalStorageData(data.user.id);
    }
}

// Handle signup
async function handleSignup(e) {
    e.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const btn = e.target.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Creating account...';

    const { data, error } = await auth.signUp(email, password, { full_name: name });

    if (error) {
        utils.handleError(error, 'Signup');
        btn.disabled = false;
        btn.textContent = 'Create Account';
    } else {
        utils.showToast('Account created! Please check your email to verify.', 'success');
        closeSignupModal();
    }
}

// Handle sign out
async function handleSignOut(e) {
    e.preventDefault();

    const { error } = await auth.signOut();

    if (error) {
        utils.handleError(error, 'Sign out');
    } else {
        utils.showToast('Signed out successfully', 'success');
        toggleUserMenu(); // Close dropdown
    }
}

// Update UI based on auth state
function updateUIForAuthState(isAuthenticated) {
    const authButtons = document.getElementById('authButtons');
    const userMenu = document.getElementById('userMenu');

    if (isAuthenticated) {
        if (authButtons) authButtons.style.display = 'none';
        if (userMenu) {
            userMenu.style.display = 'block';
            document.getElementById('userName').textContent = currentUser.email.split('@')[0];
            document.getElementById('userEmail').textContent = currentUser.email;
        }
    } else {
        if (authButtons) authButtons.style.display = 'flex';
        if (userMenu) userMenu.style.display = 'none';
    }
}

// Load user data from Supabase
async function loadUserData() {
    if (!currentUser) return;

    // This will be called by app.js to load progress and bookmarks
    window.dispatchEvent(new CustomEvent('user-authenticated', {
        detail: { userId: currentUser.id }
    }));
}

// Migrate localStorage data to Supabase
async function migrateLocalStorageData(userId) {
    const progress = JSON.parse(localStorage.getItem('mcq_progress') || '{}');
    const bookmarks = JSON.parse(localStorage.getItem('mcq_bookmarks') || '{}');

    // Check if there's data to migrate
    if (Object.keys(progress).length === 0 && Object.keys(bookmarks).length === 0) {
        return;
    }

    utils.showToast('Migrating your progress to cloud...', 'info');

    // This will be handled by app.js
    window.dispatchEvent(new CustomEvent('migrate-local-data', {
        detail: { userId, progress, bookmarks }
    }));
}

// Modal controls
window.openLoginModal = function () {
    document.getElementById('loginModal').classList.add('active');
};

window.closeLoginModal = function () {
    document.getElementById('loginModal').classList.remove('active');
};

window.openSignupModal = function () {
    document.getElementById('signupModal').classList.add('active');
};

window.closeSignupModal = function () {
    document.getElementById('signupModal').classList.remove('active');
};

window.switchToSignup = function (e) {
    e.preventDefault();
    closeLoginModal();
    openSignupModal();
};

window.switchToLogin = function (e) {
    e.preventDefault();
    closeSignupModal();
    openLoginModal();
};

window.toggleUserMenu = function () {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('active');
};

window.showProfile = function (e) {
    e.preventDefault();
    utils.showToast('Profile feature coming soon!', 'info');
    toggleUserMenu();
};

window.showStats = function (e) {
    e.preventDefault();
    toggleUserMenu(); // Close dropdown
    window.dispatchEvent(new CustomEvent('request-stats'));
};

window.showForgotPassword = function (e) {
    e.preventDefault();
    const email = prompt('Enter your email address:');
    if (email) {
        auth.resetPassword(email).then(({ error }) => {
            if (error) {
                utils.handleError(error, 'Password reset');
            } else {
                utils.showToast('Password reset email sent!', 'success');
            }
        });
    }
};

window.handleSignOut = handleSignOut;

// Export current user getter
export function getCurrentUser() {
    return currentUser;
}
