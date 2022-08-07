let form = document.querySelector(".contact__form");
let email = document.querySelector("#form__email");
let firstName = document.querySelector("#form__first-name");
let lastName = document.querySelector("#form__last-name");
let phoneNum = document.querySelector("#form__phone");
let formControl = document.querySelector(".form-control");
let submitEmail = false;
let submitFirstName = false;
let submitLastName = false;
let submitPhoneNum = false;

form.addEventListener("submit", (e) => {
  checkInputs();

  if (
    submitEmail === true &&
    submitFirstName === true &&
    submitLastName === true &&
    submitPhoneNum === true
  ) {
    console.log("submit");
  } else {
    e.preventDefault();
  }
});

function checkInputs() {
  let emailValue = email.value.trim();
  let firstNameValue = firstName.value.trim();
  let lastNameValue = lastName.value.trim();
  let phoneValue = phoneNum.value.trim();

  if (emailValue === "") {
    console.log("ERROR");
    setErrorFor(
      ".form-control.email__box",
      ".form-control.email__box p",
      "email__box",
      "Email cannot be blank"
    );
    submitEmail = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(
      ".form-control.email__box",
      ".form-control.email__box p",
      "email__box",
      "Email is not valid"
    );
    submitEmail = false;
  } else {
    setSuccessFor(".form-control.email__box", "email__box");
    submitEmail = true;
  }
  if (phoneValue === "") {
    console.log("ERROR");
    setErrorFor(
      ".form-control.number__box",
      ".form-control.number__box p",
      "number__box",
      "Phone number cannot be blank"
    );
    submitPhoneNum = false;
  } else if (!isPhone(phoneValue)) {
    setErrorFor(
      ".form-control.number__box",
      ".form-control.number__box p",
      "number__box",
      "Phone number is invalid"
    );
    submitPhoneNum = false;
  } else {
    setSuccessFor(".form-control.number__box", "number__box");
    submitPhoneNum = true;
  }
  if (firstNameValue === "") {
    console.log("ERROR");
    setErrorFor(
      ".form-control.first__name",
      ".form-control.first__name p",
      "first__name",
      "First name cannot be blank"
    );
    submitFirstName = false;
  } else {
    setSuccessFor(".form-control.first__name", "first__name");
    submitFirstName = true;
  }
  if (lastNameValue === "") {
    console.log("ERROR");
    setErrorFor(
      ".form-control.last__name",
      ".form-control.last__name p",
      "last__name",
      "Last name cannot be blank"
    );
    submitLastName = false;
  } else {
    setSuccessFor(".form-control.last__name", "last__name");
    submitLastName = true;
  }
}

function setErrorFor(formInput, messageBox, input, message) {
  console.log("invalid");
  const errorMessage = document.querySelector(messageBox);
  let formControl = document.querySelector(formInput);
  errorMessage.innerText = message;
  formControl.className = "form-control " + input + " error";
}
function setSuccessFor(formInput, input) {
  let formControl = document.querySelector(formInput);
  formControl.className = "form-control " + input + " success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function isPhone(phoneNum) {
  return phoneNum.match(/\d/g).length === 10;
}
