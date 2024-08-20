window.onload = () => {
    const inputField = document.getElementById('custom-input');

    inputField.addEventListener('focus', () => {
        inputField.classList.add('is-focused');
    });
    
    inputField.addEventListener('blur', () => {
        inputField.classList.remove('is-focused');
    });    
}