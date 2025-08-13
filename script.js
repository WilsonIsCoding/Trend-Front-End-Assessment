
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
        
        const firstName = this.querySelector('input[placeholder="First Name"]');
        const lastName = this.querySelector('input[placeholder="Last Name"]');
        const email = this.querySelector('input[placeholder="E-mail"]');
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

        alert('Account created successfully! (This is a demo)');
        console.log('Form submitted:', { 
            firstName: firstName.value, 
            lastName: lastName.value, 
            email: email.value, 
            termsAccepted 
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