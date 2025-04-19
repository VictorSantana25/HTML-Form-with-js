const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('error-msg').style.display = 'none';
    const inputs = document.querySelectorAll('.form-control, .form-select');
    inputs.forEach(input => {
        input.classList.remove('is-invalid');
    });

    let isValid = true;

    const cardNumber = document.getElementById('exampleAccount').value;
    const cardRegex = /^[0-9]{16}$/;
    if (!cardRegex.test(cardNumber)) {
        isValid = false;
        document.getElementById('exampleAccount').classList.add('is-invalid');
        showError('exampleAccount', 'El número de tarjeta debe tener 16 dígitos.');
    }

    const cvc = document.getElementById('exampleCtrl').value;
    const cvcRegex = /^[0-9]{3,4}$/;
    if (!cvcRegex.test(cvc)) {
        isValid = false;
        document.getElementById('exampleCtrl').classList.add('is-invalid');
        showError('exampleCtrl', 'El CVC debe tener 3 o 4 dígitos.');
    }

    const amount = document.getElementById('exampleAmount').value;
    if (amount <= 0) {
        isValid = false;
        document.getElementById('exampleAmount').classList.add('is-invalid');
        showError('exampleAmount', 'El monto debe ser mayor a cero.');
    }

    const firstName = document.getElementById('exampleFirst').value;
    if (firstName.trim() === '') {
        isValid = false;
        document.getElementById('exampleFirst').classList.add('is-invalid');
        showError('exampleFirst', 'Por favor, ingresa tu nombre.');
    }

    const lastName = document.getElementById('exampleLast').value;
    if (lastName.trim() === '') {
        isValid = false;
        document.getElementById('exampleLast').classList.add('is-invalid');
        showError('exampleLast', 'Por favor, ingresa tu apellido.');
    }

    const city = document.getElementById('exampleCity').value;
    if (city.trim() === '') {
        isValid = false;
        document.getElementById('exampleCity').classList.add('is-invalid');
        showError('exampleCity', 'Por favor, ingresa tu ciudad.');
    }

    const state = document.getElementById('exampleSt').value;
    if (state === 'Pick a state') {
        isValid = false;
        document.getElementById('exampleSt').classList.add('is-invalid');
        showError('exampleSt', 'Por favor, selecciona un estado.');
    }

    const zip = document.getElementById('exampleZip').value;
    if (zip.trim() === '') {
        isValid = false;
        document.getElementById('exampleZip').classList.add('is-invalid');
        showError('exampleZip', 'Por favor, ingresa el código postal.');
    }

    if (isValid) {
        alert('¡Formulario enviado con éxito!');
        form.submit();
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
});

function showError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.createElement('div');
    errorElement.classList.add('invalid-feedback');
    errorElement.textContent = message;

    if (!inputElement.nextElementSibling || !inputElement.nextElementSibling.classList.contains('invalid-feedback')) {
        inputElement.parentNode.appendChild(errorElement);
    }
}


  