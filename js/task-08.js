const form = document.querySelector('.login-form');

form.addEventListener('submit', checkForm);

function checkForm(event) {
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;

    if (email.value.trim() === "" || password.value.trim() === ""){
        return alert('All fields must be filled!');
    }
    
    
    const formObject = {
        email: email.value,
        password: password.value
    };


    console.log(formObject);
    form.reset();
}