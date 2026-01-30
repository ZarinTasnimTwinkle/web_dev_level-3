// Display Current Date and Time
function updateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('date-time').textContent = dateTimeString;
}

setInterval(updateTime, 1000);
updateTime();

// Signup Form Confirmation
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Registration Successful! Welcome to BibleLens E-commerce.");
        this.reset();
    });
}

// Login Form Mock Action
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Login Successful!");
    });
}
