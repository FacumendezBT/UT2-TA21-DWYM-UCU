window.onload = () => {
    const inputField = document.querySelector('.input');

    inputField.addEventListener('focus', () => {
        inputField.style.borderColor = '#3273dc'; // Color más oscuro cuando está activo
    });

    inputField.addEventListener('blur', () => {
        inputField.style.borderColor = '#ccc'; // Restaurar el color original
    });
}