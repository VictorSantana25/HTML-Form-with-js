document.addEventListener('DOMContentLoaded', function () {
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
            showError('exampleAccount', 'Card number must be 16 digits.');
        }

        const cvc = document.getElementById('exampleCtrl').value;
        const cvcRegex = /^[0-9]{3,4}$/;
        if (!cvcRegex.test(cvc)) {
            isValid = false;
            document.getElementById('exampleCtrl').classList.add('is-invalid');
            showError('exampleCtrl', 'CVC must be 3 or 4 digits.');
        }

        const amount = document.getElementById('exampleAmount').value;
        if (amount <= 0) {
            isValid = false;
            document.getElementById('exampleAmount').classList.add('is-invalid');
            showError('exampleAmount', 'Amount must be greater than zero.');
        }

        const firstName = document.getElementById('exampleFirst').value;
        if (firstName.trim() === '') {
            isValid = false;
            document.getElementById('exampleFirst').classList.add('is-invalid');
            showError('exampleFirst', 'First name is required.');
        }

        const lastName = document.getElementById('exampleLast').value;
        if (lastName.trim() === '') {
            isValid = false;
            document.getElementById('exampleLast').classList.add('is-invalid');
            showError('exampleLast', 'Last name is required.');
        }

        const city = document.getElementById('exampleCity').value;
        if (city.trim() === '') {
            isValid = false;
            document.getElementById('exampleCity').classList.add('is-invalid');
            showError('exampleCity', 'City is required.');
        }

        const state = document.getElementById('exampleSt').value;
        if (state === 'Pick a state') {
            isValid = false;
            document.getElementById('exampleSt').classList.add('is-invalid');
            showError('exampleSt', 'State is required.');
        }

        const zip = document.getElementById('exampleZip').value;
        if (zip.trim() === '') {
            isValid = false;
            document.getElementById('exampleZip').classList.add('is-invalid');
            showError('exampleZip', 'Postal code is required.');
        }

        if (isValid) {
            alert('Form submitted successfully!');
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
});

  