// JavaScript for form validation

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8 && 
           /[A-Z]/.test(password) && 
           /[a-z]/.test(password) && 
           /\d/.test(password) && 
           /[!@#\$%\^&\*]/.test(password);
}

function showValidationMessage(input, message, isValid) {
    const feedback = input.nextElementSibling;
    feedback.textContent = message;
    feedback.style.color = isValid ? "green" : "red";
    input.style.borderColor = isValid ? "green" : "red";
}

document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", event => {
            let isValid = true;
            const emailInput = form.querySelector("input[type='email']");
            const passwordInput = form.querySelector("input[type='password']");
            
            if (emailInput && !validateEmail(emailInput.value)) {
                showValidationMessage(emailInput, "Invalid email address", false);
                isValid = false;
            } else if (emailInput) {
                showValidationMessage(emailInput, "Valid email", true);
            }

            if (passwordInput && !validatePassword(passwordInput.value)) {
                showValidationMessage(passwordInput, "Password must be 8+ characters with upper, lower, digit, special character", false);
                isValid = false;
            } else if (passwordInput) {
                showValidationMessage(passwordInput, "Strong password", true);
            }

            if (!isValid) event.preventDefault();
        });
    });
});
