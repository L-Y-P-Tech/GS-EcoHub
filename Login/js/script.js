const correctEmail = "EcoHub@gmail.com";
const correctPassword = "12345";

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if (email === correctEmail && password === correctPassword) {
        localStorage.setItem('loggedIn', true);
        window.location.href = "../dashboard.html";
    } else {
        alert("Email ou senha incorretos!");
    }
});