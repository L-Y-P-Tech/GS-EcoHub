
if (!localStorage.getItem('loggedIn')) {
    window.location.href = "login.html";
}

// Função de logout
document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('loggedIn');

    window.location.href = "index.html";
});
