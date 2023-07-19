
const inputValidation = document.querySelector('#validation-input');
const expectedLength = Number(inputValidation.dataset.length);

function checkValidation() {
    if (inputValidation.value.trim().length === expectedLength){
        inputValidation.classList.remove('invalid');
        inputValidation.classList.add('valid');
    } else {
        inputValidation.classList.remove('valid');
        inputValidation.classList.add('invalid');
    }
}

inputValidation.addEventListener('blur', checkValidation);