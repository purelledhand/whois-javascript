const greetingForm = document.querySelector(".greeting_form");
const greetingInput = document.querySelector(".greeting_input");
const greetingTitle = document.querySelector(".greeting_title");

const NAME_LS = "name";

function doGreeting(text) {
  greetingTitle.innerText = `Hello, ${text}`;

  greetingInput.classList.add("hide");
  greetingTitle.classList.remove("hide");
}

function saveName(text) {
  localStorage.setItem(NAME_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();

  const currentValue = greetingInput.value;

  doGreeting(currentValue);
  saveName(currentValue);
}

function loadName() {
  const loadedName = localStorage.getItem(NAME_LS);

  if(loadedName !== null) doGreeting(loadedName);
}

function init() {
  loadName();
  greetingForm.addEventListener("submit", handleSubmit);
}

init();
