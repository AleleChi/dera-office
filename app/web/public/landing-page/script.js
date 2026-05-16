document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');

    loginButton.addEventListener('click', function() {
        window.location.href = 'login.html'; // Redirect to login page
    });

    signupButton.addEventListener('click', function() {
        window.location.href = 'signup.html'; // Redirect to signup page
    });
});