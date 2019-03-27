const todosForm = document.querySelector(".todos_form");
const todosInput = document.querySelector(".todos_input");
const todosList = document.querySelector(".todos_list");

const TODOS_LS = "todos";
let todos = [];

function deleteTodo(event) {
  const target = event.target;
  const targetli = target.parentNode;

  todosList.removeChild(targetli);

  todos = todos.filter((todo) => {
    return todo.id !== parseInt(targetli.id);
  });

  console.log(todos);
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function displayTodo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span")
  const delButton = document.createElement("button");
  const newId = todos.length + 1;

  span.innerText = text;
  delButton.innerText = 'X';
  delButton.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(delButton);
  li.id = newId;

  todosList.appendChild(li);

  const todo = {
    text: text,
    id: newId,
  };

  todos.push(todo);

  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function handleTodoSubmit(event) {
  event.preventDefault();

  const currentTodo = todosInput.value;

  displayTodo(currentTodo);

  todosInput.value = '';
}

function loadTodo() {
  const loadedTodo = localStorage.getItem(TODOS_LS);

  if(loadedTodo !== null && loadedTodo.length !== 0) {
    const parsedTodo = JSON.parse(loadedTodo);

    parsedTodo.forEach((todo) => {
      displayTodo(todo.text);
    });
  }
}

function init() {
  loadTodo();
  todosForm.addEventListener("submit", handleTodoSubmit);
}

init();