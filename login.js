const loginForm = document.getElementById('login-form');

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
loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const email = loginForm.querySelector('#email-input').value;
    const password = loginForm.querySelector('#senha-input').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingError = loginForm.querySelector('#error-message');
    if (existingError) {
        existingError.remove();
    }

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUserEmail', user.email);
        localStorage.setItem('loggedInUsername', user.username);
        localStorage.setItem('loggedInPassword', user.password);
        window.location.href = 'menu.html'; 
    } else {
        const errorMessage = document.createElement('p');
        errorMessage.id = 'error-message'; 
        errorMessage.textContent = 'Email ou senha incorretos';
        errorMessage.style.color = '#e63636';
        loginForm.appendChild(errorMessage);
    }
});
