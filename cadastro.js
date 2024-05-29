const formD = document.getElementById('form');


function showHidePassword(inputId, iconElement) {
    const input = document.getElementById(inputId);
    const isPassword = input.type === 'password';

    if (isPassword) {
        input.type = 'text';
        iconElement.style.backgroundImage = "url('hide.png')";
    } else {
        input.type = 'password';
        iconElement.style.backgroundImage = "url('show.png')";
    }
}

document.getElementById('senha-input').addEventListener('input', function() {
    const password = this.value;
    validatePassword(password);
});

document.getElementById('form').addEventListener('submit', function(event) {
    const passwordInput = document.getElementById('senha-input');
    const password = passwordInput.value;
    
    if (!isPasswordValid(password)) {
        event.preventDefault(); 
    }
});

function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    updateRequirement('length-requirement', password.length >= minLength);
    updateRequirement('uppercase-requirement', hasUpperCase);
    updateRequirement('lowercase-requirement', hasLowerCase);
    updateRequirement('number-requirement', hasNumbers);
    updateRequirement('symbol-requirement', hasSymbols);

    const strength = checkPasswordStrength(password);
    displayPasswordStrength(strength);
}

function checkPasswordStrength(password) {    
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSymbols) {
        return 'forte';
    } 
    else if ((password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers) ||
             (password.length >= minLength && hasUpperCase && hasLowerCase && hasSymbols) ||
             (password.length >= minLength && hasUpperCase && hasNumbers && hasSymbols) ||
             (password.length >= minLength && hasLowerCase && hasNumbers && hasSymbols)) {
        return 'média';
    } 
    else {
        return 'fraca';
    }
}

function displayPasswordStrength(strength) {
    const matchPasswordElement = document.getElementById('match-password');
    if (strength === 'forte') {
        matchPasswordElement.textContent = 'Sua senha é forte';
        matchPasswordElement.style.color = 'black';
    }else if (strength === 'média'){
        matchPasswordElement.textContent = 'Sua senha é média';
        matchPasswordElement.style.color = 'black';
    }else {
        matchPasswordElement.textContent = 'Sua senha é fraca';
        matchPasswordElement.style.color = 'black';
    }
}

function updateRequirement(elementId, isValid) {
    const element = document.getElementById(elementId);
    if (isValid) {
        element.classList.add('valid');
    } else {
        element.classList.remove('valid');
    }
}

function isPasswordValid(password) {
    return password.length >= 8 &&
           /[A-Z]/.test(password) &&
           /[a-z]/.test(password) &&
           /[0-9]/.test(password) &&
           /[!@#$%^&*(),.?":{}|<>]/.test(password);

}

window.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('senha-input');
    validatePassword(passwordInput.value);
});


formD.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formD);
    const data = Object.fromEntries(formData);

    const senha = data['password'];
    const senhaConfirm = data['password-confirm'];
    const senhaConfirmInput = document.getElementById('senha-confirm-input');
    const senhaConfirmError = document.getElementById('senha-confirm-error');

    if (senha !== senhaConfirm) {
        console.error('As senhas não coincidem');
        senhaConfirmInput.style.border = '2px solid #e63636';
        senhaConfirmError.textContent = 'As senhas não coincidem';
        return;
    } else {
        senhaConfirmInput.style.border = ''; 
        senhaConfirmError.textContent = ''; 
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.push(data);

    localStorage.setItem('users', JSON.stringify(users));

    alert("Cadastro realizado com sucesso!");
    window.location.href = 'login.html';
});
