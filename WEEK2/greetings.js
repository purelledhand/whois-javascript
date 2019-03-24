const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const greetings = document.querySelector(".greetings");

const USER_LS = "USER";

function saveUser(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();

  const currentValue = input.value;

  saveUser(currentValue);
  doGreeting(currentValue);
}


function doGreeting(name) {
  greetings.innerText = `Hello, ${name}`;
  greetings.classList.remove("hide");
  input.classList.add("hide");
}

function setName() {
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  console.log(currentUser);

  if(currentUser === null) setName();
  else doGreeting(currentUser);
}



function init() {
  loadName();
}

init();