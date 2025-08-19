// Form validation helper
export function validateField(field) {
    if (!field.value.trim()) {
        field.classList.add('error');
        return false;
    }
    return true;
}

// UI visibility toggle helper
export function toggleVisibility(showElement, hideElement) {
    showElement.classList.remove('hidden');
    hideElement.classList.add('hidden');
}