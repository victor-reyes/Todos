export function createListElement(todo: Todo) {
  const li = document.createElement("li");

  const titleContainer = document.createElement("b");
  titleContainer.textContent = todo.title;

  li.appendChild(titleContainer);
  return li;
}
