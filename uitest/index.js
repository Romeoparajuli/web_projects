// Get elements from the DOM by their IDs
const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');
const passwordToggle = document.getElementById('password-toggle'); 
const forgotPasswordLink = document.getElementById('forgot-password');

// Add event listener to password toggle button
passwordToggle.addEventListener('click', () => {
    // Toggle password visibility
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Change input type to text to show password
        passwordToggle.classList.remove('fa-eye'); // Change icon from eye to eye-slash
        passwordToggle.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password'; // Change input type back to password to hide it
        passwordToggle.classList.remove('fa-eye-slash'); // Change icon from eye-slash to eye
        passwordToggle.classList.add('fa-eye');
    }
});

// Add event listener to form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting the default way
    const username = usernameInput.value.trim(); // Get and trim username input value
    const password = passwordInput.value.trim(); // Get and trim password input value

    // Validate username and password
    if (username === '') {
        usernameError.textContent = 'Username is required'; // Show error if username is empty
        return;
    } else {
        usernameError.textContent = ''; // Clear error message if valid
    }

    if (password === '') {
        passwordError.textContent = 'Password is required'; // Show error if password is empty
        return;
    } else {
        passwordError.textContent = ''; // Clear error message if valid
    }

    // TO DO: Add login logic here
    // For example, you can make an AJAX request to a server-side script
    // to verify the username and password
    console.log('Login successful!');
    // Redirect to a dashboard or another page after successful login
    window.location.href = 'dashboard.html';
});

// Add event listener to forgot password link
forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    // Redirect to the forgot password page
    window.location.href = 'forgot-password.html';
});
