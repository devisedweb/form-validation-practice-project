const signupForm = document.querySelector("#signup-form");

function handleSignupFormSubmit(e) {
  console.log("Form submitted!");
  // prevent default browser behaviour
  e.preventDefault();

  // create a signup form with key value pair
  const formDataEntries = new FormData(signupForm).entries();
  // stores the key value in an object
  const { email, password } = Object.fromEntries(formDataEntries);

  // stores error messages, if any
  const emailErrorMessage = validateEmail(email);
  const passwordErrorMessage = validatePassword(password);

  // checks for a error message, displays it if any
  if (emailErrorMessage) {
    const emailErrorMessageElement = document.querySelector(
      ".email-form-field-messages",
    );

    emailErrorMessageElement.textContent = emailErrorMessage;
  }

  // checks for a error message, displays it if any
  if (passwordErrorMessage) {
    const passwordErrorMessageElement = document.querySelector(
      ".password-form-field-messages",
    );

    passwordErrorMessageElement.textContent = passwordErrorMessage;
  }

  console.log(email, password);
}

signupForm.addEventListener("submit", handleSignupFormSubmit);

function validateEmail(email) {
  // checks if the user left the input field empty
  if (!email) return "Email is required";

  // checks if the email is valid, with a prroper @ symbol and no whitespaces before and after
  const isValidEmail = /^\S+@\S+$/g;
  if (!isValidEmail.test(email)) {
    return "Please enter a valid email";
  }

  // will return nothing if there's no error
  return "";
}

function validatePassword(password) {
  // checks if the user left the input field empty
  if (!password) return "Password is required";

  // checks if the password length is minimum minLength characters long
  let minLength = 8;
  if (password.length < minLength) {
    return `Please enter a password that's at least ${minLength} characters long`;
  }

  // checks if the password has a capital letter
  const hasCapitalLetter = /[A-Z]/g;
  if (!hasCapitalLetter.test(password)) {
    return "Please use at least one capital character";
  }

  // checks if the password has a number
  const hasNumber = /\d/g;
  if (!hasNumber.test(password)) {
    return "Please use at least one number";
  }

  // will return nothing if there's no error
  return "";
}
