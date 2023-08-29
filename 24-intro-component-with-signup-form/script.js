// FORM VALIDATION


// Declaring Variables
const form = document.getElementById('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email_address');
const password = document.getElementById('password');


// Focus on First Name field when the page loads
window.onload = setTimeout(() => {
    firstName.focus();    
}, 2000);


// Functionality for the form validation
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    const firstNameValue = firstName.value.trim(); 
    const lastNameValue = lastName.value.trim(); 
    const emailValue = email.value.trim(); 
    const passwordValue = password.value.trim();
    
    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
        password.focus()
    } else {
        setSuccessFor(password);
    }    

    if(emailValue === '') {
        setErrorFor(email, 'Email Address cannot be empty');
        email.focus()
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Looks like this is not an email');
        email.focus()
    } else {
        setSuccessFor(email);
    }

    if(lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be empty');
        lastName.focus()
    } else {
        setSuccessFor(lastName);
    }

    if(firstNameValue === '') {
        setErrorFor(firstName, 'First Name cannot be empty');
        firstName.focus()
    } else {
        setSuccessFor(firstName);
    }
    
}

function setErrorFor(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = message;
    formGroup.className = 'form-group error'
}

function setSuccessFor(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
}

function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}
