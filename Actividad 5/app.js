$(document).ready(function () {
    $('#submitButton').click(function () {
        $('#usernameError, #emailError, #passwordError').text('');

        const username = $('#username').val();
        const email = $('#email').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();

        if (username === '' || username.length > 16) {
            $('#usernameError').text('El nombre de usuario debe tener entre 1 y 16 caracteres.');
            return;
        }

        if (email === '') {
            $('#emailError').text('El correo no puede estar vacío.');
            return;
        }

        if (password === '') {
            $('#passwordError').text('La contraseña no puede estar vacía.');
            return;
        }

        if (password !== confirmPassword) {
            $('#passwordError').text('Las contraseñas no coinciden.');
            return;
        }
        $('#successModal').show();
    });
    $('#closeModal').click(function () {
        $('#successModal').hide();
    });
    $(window).click(function (event) {
        if (event.target === $('#successModal')[0]) {
            $('#successModal').hide();
        }
    });
});