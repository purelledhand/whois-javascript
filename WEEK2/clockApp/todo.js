const todosForm = document.querySelector(".todos_form");
const todosInput = document.querySelector(".todos_input");
const todosList = document.querySelector(".todos_list");

function displayTodo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");

  span.innerText = text;
  li.appendChild(span);

  todosList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();

  const currentTodo = todosInput.value;

  displayTodo(currentTodo);
}

function init() {
  todosForm.addEventListener("submit", handleTodoSubmit);
}

init();