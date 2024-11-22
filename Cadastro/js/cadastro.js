document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const cpfInput = document.getElementById('cpf');
    const senhaInput = document.getElementById('senha');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        clearErrors();
        let isValid = true;

        // Validar nome
        if (!nomeInput.value.trim()) {
            showError(nomeInput, 'Por favor, insira seu nome');
            isValid = false;
        } else if (nomeInput.value.trim().length < 3) {
            showError(nomeInput, 'O nome deve ter pelo menos 3 caracteres');
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

        // Validar CPF
        if (!cpfInput.value.trim()) {
            showError(cpfInput, 'Por favor, insira seu CPF');
            isValid = false;
        } else if (!isValidCPF(cpfInput.value)) {
            showError(cpfInput, 'Por favor, insira um CPF válido');
            isValid = false;
        }

        // Validar senha
        if (!senhaInput.value) {
            showError(senhaInput, 'Por favor, insira uma senha');
            isValid = false;
        } else if (senhaInput.value.length < 6) {
            showError(senhaInput, 'A senha deve ter pelo menos 6 caracteres');
            isValid = false;
        }

        if (isValid) {
            alert('Cadastro realizado com sucesso!');
            window.location.href = '../Login/login.html';
        }
    });

    function showError(input, message) {
        // Criar container para o input e mensagem de erro se não existir
        let inputContainer = input.parentElement;
        if (!inputContainer.classList.contains('input-container')) {
            inputContainer = document.createElement('div');
            inputContainer.className = 'input-container';
            input.parentNode.insertBefore(inputContainer, input);
            inputContainer.appendChild(input);
        }

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        errorDiv.style.marginBottom = '10px';
        errorDiv.textContent = message;
        
        // Inserir mensagem de erro após o input
        input.insertAdjacentElement('afterend', errorDiv);
        input.style.borderColor = 'red';
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        
        const inputs = [nomeInput, emailInput, cpfInput, senhaInput];
        inputs.forEach(input => {
            input.style.borderColor = '';
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidCPF(cpf) {
        cpf = cpf.replace(/[^\d]/g, '');
        if (cpf.length !== 11) return false;
        if (/^(\d)\1+$/.test(cpf)) return false;
        return true;
    }

    // Feedback visual em tempo real
    const inputs = [nomeInput, emailInput, cpfInput, senhaInput];
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const errorMessage = input.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains('error-message')) {
                errorMessage.remove();
            }
            input.style.borderColor = input.value.trim() ? '#4caf50' : '';
        });
    });

    function voltar() {
        window.history.back();
    }
});