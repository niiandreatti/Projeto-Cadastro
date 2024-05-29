document.addEventListener('DOMContentLoaded', function() {
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    const loggedInPassword = localStorage.getItem('loggedInPassword');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const nameElement = document.getElementById('name-user');
    const emailElement = document.getElementById('email-user');
    const passwordElement = document.getElementById('password-user');
    
    const loggedInUser = users.find(user => user.email === loggedInUserEmail && user.username == loggedInUsername && user.password == loggedInPassword );
    if (loggedInUser) {
        console.log("entrei")
        nameElement.textContent = `${loggedInUser.username}!`;
        emailElement.textContent = `Seu email é: ${loggedInUser.email}`;
        passwordElement.textContent = `Sua senha é: ${loggedInUser.password}`;
    }
});
