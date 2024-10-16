import { createListElement } from "./utils.js";

const form = document.getElementById("form") as HTMLFormElement;
const todoTitle = document.getElementById("title") as HTMLFormElement;
const todoDescription = document.getElementById("description") as HTMLFormElement;
const todosContainer = document.getElementById("todos-container")!;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = todoTitle.value;
  const description = todoDescription.value;
  const todo = { title, description };
  postTodo(todo);
});

// when DOM is ready fetch and display current todos
addEventListener("DOMContentLoaded", async (_) => {
  const todos = await fetchTodos();
  renderTodos(todos);
});

function renderTodos(todos: Todo[]) {
  // remove any eventuall children
  todosContainer.replaceChildren();
  const ol = document.createElement("ol");
  todos.forEach((todo) => {
    const li = createListElement(todo);
    const deleteBtn = li.lastElementChild as HTMLButtonElement;
    console.log("btn", li.lastElementChild);

    deleteBtn.addEventListener("click", async (event) => {
      event.preventDefault();
      deleteTodo(todo);
    });
    ol.append(li);
  });
  todosContainer.appendChild(ol);
}

async function fetchTodos() {
  const responce = await fetch("http://localhost:4444/api/v1/todos");
  const todos = (await responce.json()) as Todo[];
  return todos;
}

async function postTodo(todo: Todo) {
  const responce = await fetch("http://localhost:4444/api/v1/todo", {
    method: "post",
    body: JSON.stringify(todo),
  });
  if (responce.ok) {
    const todos = await fetchTodos();
    renderTodos(todos);
  }
}

async function deleteTodo(todo: Todo) {
  const responce = await fetch("http://localhost:4444/api/v1/todo", {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  if (responce.ok) {
    const todos = await fetchTodos();
    renderTodos(todos);
  }
}
