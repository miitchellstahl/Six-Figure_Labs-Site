let form = document.querySelector(".call__left");
let email = document.querySelector("#email-call");
let submitEmail = false;

form.addEventListener("submit", (e) => {
  checkInputs();

  if (submitEmail === true) {
    console.log("submit");
  } else {
    e.preventDefault();
  }
});

function checkInputs() {
  let emailValue = email.value.trim();

  if (emailValue === "") {
    console.log("ERROR");
    setErrorFor(email, "Email cannot be blank");
    submitEmail = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
    submitEmail = false;
  } else {
    setSuccessFor(email);
    submitEmail = true;
  }
}

function setErrorFor(input, message) {
  const errorMessage = document.querySelector(".call__left p");
  errorMessage.innerText = message;
  form.className = "call__left error";
}
function setSuccessFor(input) {
  form.className = "call__left success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
