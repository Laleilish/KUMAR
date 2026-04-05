const phoneInput = document.getElementById('phone-input');
const btnLanjutkan = document.getElementById('btn-lanjutkan');

phoneInput.addEventListener('input', () => {
    if (phoneInput.value.trim().length > 0) {
        btnLanjutkan.classList.add('enabled');
        btnLanjutkan.disabled = false;
    } else {
        btnLanjutkan.classList.remove('enabled');
        btnLanjutkan.disabled = true;
    }
});
