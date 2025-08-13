document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const signupForm = document.querySelector('.signup-form');
    const backButton = document.querySelector('.back-button');
    const requirements = document.querySelectorAll('.requirement');

    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁' : '🙈';
    });

    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const hasMinLength = password.length >= 8;
        const hasNumber = /\d/.test(password);

        requirements[0].style.color = hasMinLength ? '#16a34a' : '#9ca3af';
        requirements[1].style.color = hasNumber ? '#16a34a' : '#9ca3af';
        
        requirements[0].innerHTML = `${hasMinLength ? '✓' : '○'} 8 Characters min.`;
        requirements[1].innerHTML = `${hasNumber ? '✓' : '○'} One number`;
    });

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