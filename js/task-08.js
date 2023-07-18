const form = document.querySelector('.login-form');

form.addEventListener('submit', checkForm);

function checkForm(event) {
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;

    if (email.value === "" || password.value === ""){
        return alert('All fields must be filled!');
    }
    
    const formData = form.elements;
    const formObject = {};

    for (let i = 0; i < formData.length; i+=1){
        const element = formData[i];
        if (element.tagName === 'INPUT'){
            formObject[element.name] = element.value;
        }
    };
    

    console.log(formObject);
    form.reset();
}