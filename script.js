
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const signupForm = document.querySelector('.signup-form');
    const backButton = document.querySelector('.back-button');
    const requirements = document.querySelectorAll('.requirement');
    const eyeOpen = document.getElementById('eyeOpen');
    const eyeClosed = document.getElementById('eyeClosed');

    togglePassword.addEventListener('click', function () {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
    
        if (isPassword) {
            // 顯示「閉眼」圖示
            eyeClosed.classList.remove('hidden');
            eyeOpen.classList.add('hidden');
        } else {
            // 顯示「開眼」圖示
            eyeClosed.classList.add('hidden');
            eyeOpen.classList.remove('hidden');
        }
    });

    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const hasMinLength = password.length >= 8;
        const hasNumber = /\d/.test(password);
    
        toggleIcon(requirements[0], hasMinLength);
        toggleIcon(requirements[1], hasNumber);
    });
    
    function toggleIcon(requirementEl, passed) {
        const iconCheck = requirementEl.querySelector('.icon-check');
        const iconUncheck = requirementEl.querySelector('.icon-uncheck');
    
        if (passed) {
            iconCheck.classList.remove('hidden');
            iconUncheck.classList.add('hidden');
            requirementEl.style.color = '#16a34a';
        } else {
            iconCheck.classList.add('hidden');
            iconUncheck.classList.remove('hidden');
            requirementEl.style.color = '#9ca3af';
        }
    }
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const form = document.querySelector('form');
        const firstName = form.querySelector('#firstName');
        const lastName = form.querySelector('#lastName');
        const email = form.querySelector('#email');
        const password = passwordInput;
        const termsAccepted = this.querySelector('#terms').checked;
        const errorMessage = document.getElementById('error-message');
        
        // Reset error states
        [firstName, lastName, email, password].forEach(input => {
            input.classList.remove('error');
        });
        errorMessage.classList.remove('show');
        
        // Check for empty fields
        let hasError = false;
        
        if (!firstName.value.trim()) {
            firstName.classList.add('error');
            hasError = true;
        }
        
        if (!lastName.value.trim()) {
            lastName.classList.add('error');
            hasError = true;
        }
        
        if (!email.value.trim()) {
            email.classList.add('error');
            hasError = true;
        }
        
        if (!password.value.trim()) {
            password.classList.add('error');
            hasError = true;
        }
        
        if (!termsAccepted) {
            hasError = true;
        }
        
        if (hasError) {
            errorMessage.classList.add('show');
            return;
        }

        if (password.value.length < 8 || !/\d/.test(password.value)) {
            password.classList.add('error');
            errorMessage.classList.add('show');
            return;
        }

        // Show loading state
        const submitButton = signupForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Creating account...';
        
        // Prepare data for API
        const formData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
        };
        
        // Send data to Google Apps Script endpoint
        fetch('https://script.google.com/macros/s/AKfycbxPogJmt33Ue383U3TPDizNVUHLiHyEjH2krR13iE8MSX3Sr0rbxCBEekaL7_3k9Csr0A/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(() => {
            // With no-cors mode, we can't read the response
            // Assume success if no error thrown
            alert('Account created successfully!');
            // Reset form
            signupForm.reset();
            // Reset password requirements visual state
            requirements.forEach(req => {
                toggleIcon(req, false);
            });
        })
        .catch((error) => {
            console.error('Error submitting form:', error);
            alert('An error occurred while creating your account. Please try again.');
        })
        .finally(() => {
            // Restore button state
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        });
    });
    
    // Remove error state when user starts typing
    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.remove('error');
            }
        });
    });

    backButton.addEventListener('click', function() {
        window.history.back();
    });

    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.classList.contains('google-btn') ? 'Google' : 'Facebook';
            alert(`${provider} signup clicked! (This is a demo)`);
        });
    });

    console.log('Sign-up form loaded and ready!');
});