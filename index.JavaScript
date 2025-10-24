const passwordInput = document.getElementById('password');
const strengthText = document.getElementById('strength');

passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    let strength = checkStrength(password);

    strengthText.textContent = 'Strength: ' + strength.label;
    strengthText.className = '';
    strengthText.classList.add(strength.class);
});

function checkStrength(password) {
    let score = 0;

    if(password.length >= 8) score++;
    if(/[A-Z]/.test(password)) score++;
    if(/[a-z]/.test(password)) score++;
    if(/[0-9]/.test(password)) score++;
    if(/[\W]/.test(password)) score++;

    if(score <= 2) return {label: 'Weak', class: 'weak'};
    else if(score === 3 || score === 4) return {label: 'Medium', class: 'medium'};
    else return {label: 'Strong', class: 'strong'};
}
