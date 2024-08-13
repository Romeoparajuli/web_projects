import { firebaseConfig } from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

// script.js
const form = document.getElementById('create-user-form');
const createBtn = document.getElementById('create-btn');
const fullNameInput = document.getElementById('fullName');
const cadetNumberInput = document.getElementById('cadetNumber');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const phoneNumberInput = document.getElementById('phoneNumber');
const completeAddressInput = document.getElementById('completeAddress');
const educationInput = document.getElementById('education');
const dobInput = document.getElementById('dob');

createBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const fullName = fullNameInput.value;
    const cadetNumber = cadetNumberInput.value;
    const email = emailInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;
    const phoneNumber = phoneNumberInput.value;
    const completeAddress = completeAddressInput.value;
    const education = educationInput.value;
    const dob = dobInput.value;

    let errors = [];

    // Validate full name
    if (fullName === '') {
        errors.push('Full name is required');
    } else if (fullName.length < 3) {
        errors.push('Full name must be at least 3 characters');
    }

    // Validate cadet number
    if (cadetNumber === '') {
        errors.push('Cadet number is required');
    } else if (!validateCadetNumber(cadetNumber)) {
        errors.push('Invalid cadet number');
    }

    // Validate email
    if (email === '') {
        errors.push('Email is required');
    } else if (!validateEmail(email)) {
        errors.push('Invalid email address');
    }

    // Validate username
    if (username === '') {
        errors.push('Username is required');
    } else if (username.length < 3) {
        errors.push('Username must be at least 3 characters');
    }

    // Validate password
    if (password === '') {
        errors.push('Password is required');
    } else if (!validatePassword(password)) {
        errors.push('Invalid password');
    }

    // Validate phone number
    if (phoneNumber === '') {
        errors.push('Phone number is required');
    } else if (!validatePhoneNumber(phoneNumber)) {
        errors.push('Invalid phone number');
    }

    // Validate complete address
    if (completeAddress === '') {
        errors.push('Complete address is required');
    }

    // Validate education
    if (education === '') {
        errors.push('Education is required');
    }

    // Validate date of birth
    if (dob === '') {
        errors.push('Date of birth is required');
    } else if (!validateDateOfBirth(dob)) {
        errors.push('Invalid date of birth');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        // Send data to Firebase Realtime Database
        const db = firebase.database();
        const ref = db.ref('users');
        ref.push({
            fullName: fullName,
            cadetNumber: cadetNumber,
            email: email,
            username: username,
            password: password,
            phoneNumber: phoneNumber,
            completeAddress: completeAddress,
            education: education,
            dob: dob
        });
        alert('User created successfully!');
    }
});

function validateCadetNumber(cadetNumber) {
    const re = /^[0-9]{6}$/;
    return re.test(cadetNumber);
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,}$/;
    return re.test(password);
}

function validatePhoneNumber(phoneNumber) {
    const re = /^[0-9]{10}$/;
    return re.test(phoneNumber);
}

function validateDateOfBirth(dob) {
    const date = new Date(dob);
    return date instanceof Date && !isNaN(date);
}