
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
        
        const formData = new FormData(this);
        const firstName = this.querySelector('input[placeholder="First Name"]').value;
        const lastName = this.querySelector('input[placeholder="Last Name"]').value;
        const email = this.querySelector('input[placeholder="E-mail"]').value;
        const password = passwordInput.value;
        const termsAccepted = this.querySelector('#terms').checked;

        if (!firstName || !lastName || !email || !password || !termsAccepted) {
            alert('Please fill in all fields and accept the terms.');
            return;
        }

        if (password.length < 8 || !/\d/.test(password)) {
            alert('Password must be at least 8 characters long and contain at least one number.');
            return;
        }

        alert('Account created successfully! (This is a demo)');
        console.log('Form submitted:', { firstName, lastName, email, termsAccepted });
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