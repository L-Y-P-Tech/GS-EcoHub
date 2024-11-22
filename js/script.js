document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.footer-form form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Resetar mensagens de erro anteriores
        clearErrors();
        
        let isValid = true;

        // Validar nome
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Por favor, insira seu nome');
            isValid = false;
        } else if (nameInput.value.trim().length < 3) {
            showError(nameInput, 'O nome deve ter pelo menos 3 caracteres');
            isValid = false;
        }

        // Validar email
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Por favor, insira seu email');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Por favor, insira um email válido');
            isValid = false;
        }

        // Validar mensagem
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Por favor, insira sua mensagem');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'A mensagem deve ter pelo menos 10 caracteres');
            isValid = false;
        }

        // Se tudo estiver válido, enviar o formulário
        if (isValid) {
            // Aqui você pode adicionar o código para enviar o formulário
            alert('Mensagem enviada com sucesso!');
            form.reset();
        }
    });

    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = message;
        input.parentElement.appendChild(errorDiv);
        input.style.borderColor = 'red';
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        
        const inputs = [nameInput, emailInput, messageInput];
        inputs.forEach(input => {
            input.style.borderColor = '';
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Adicionar feedback visual quando o usuário digita
    const inputs = [nameInput, emailInput, messageInput];
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (input.value.trim()) {
                input.style.borderColor = '#4caf50';
            } else {
                input.style.borderColor = '';
            }
        });
    });
});