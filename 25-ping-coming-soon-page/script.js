// Email Validation

// Declaring Variables
const form = document.querySelector(".form");
const email = document.getElementById("email");
const pattern =
  // Functionality
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
  });

function checkInput() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Whoops! It looks like you forgot to add your email");
  } else if (!isEmail(emailValue)) {
    setError(email, "Please provide a valid email address");
  } else {
    setSuccess(email);
  }
}

function setError(input, message) {
  const formContent = input.parentElement;
  formContent.className = "form-content error";
  const small = document.querySelector("small");
  const formContent2 = formContent.nextElementSibling;
  formContent2.className = "form-content2 error";
  small.innerText = message;
}

function setSuccess(input) {
  const formContent = input.parentElement;
  formContent.className = "form-content success";
  const formContent2 = formContent.nextElementSibling;
  formContent2.className = "form-content2 success";
}

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
