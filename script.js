       // Função para mostrar/ocultar a senha
       function togglePassword(id) {
        const passwordInput = document.getElementById(id);
        const type = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = type;
    }
    
    // Função para validar o e-mail
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
    
    // Função para verificar as senhas
    function validatePasswords(password, confirmPassword) {
        return password === confirmPassword;
    }
    
    // Função de validação do formulário
    function validateForm(event) {
        event.preventDefault(); // Evita o envio do formulário
    
        const form = document.getElementById('signup-form');
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
    
        let isValid = true;
    
        // Limpar mensagens de erro
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.textContent = '');
    
        // Validar nome
        if (name === "") {
            document.querySelector('#name + .error-message').textContent = 'O nome é obrigatório.';
            isValid = false;
        }
    
        // Validar e-mail
        if (email === "") {
            document.querySelector('#email + .error-message').textContent = 'O e-mail é obrigatório.';
            isValid = false;
        } else if (!validateEmail(email)) {
            document.querySelector('#email + .error-message').textContent = 'E-mail inválido.';
            isValid = false;
        }
    
        // Validar senha
        if (password === "") {
            document.querySelector('#password + .error-message').textContent = 'A senha é obrigatória.';
            isValid = false;
        } else if (password.length < 6) {
            document.querySelector('#password + .error-message').textContent = 'A senha deve ter pelo menos 6 caracteres.';
            isValid = false;
        }
    
        // Validar confirmação de senha
        if (confirmPassword === "") {
            document.querySelector('#confirm-password + .error-message').textContent = 'A confirmação de senha é obrigatória.';
            isValid = false;
        } else if (!validatePasswords(password, confirmPassword)) {
            document.querySelector('#confirm-password + .error-message').textContent = 'As senhas não coincidem.';
            isValid = false;
        }
    
        // Se todos os campos estiverem válidos, envia o formulário
        if (isValid) {
            alert('Cadastro realizado com sucesso!');
            form.reset(); // Limpa os campos
        }
    }
    
    // Adicionar evento de submit ao formulário
    document.getElementById('signup-form').addEventListener('submit', validateForm);
    