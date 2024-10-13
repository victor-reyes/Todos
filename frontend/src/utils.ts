export function createListElement(todo: Todo) {
  const { title, description } = todo;
  const li = document.createElement("li");

  const titleContainer = document.createElement("b");
  titleContainer.textContent = title;
  li.appendChild(titleContainer);

  if (description) {
    const descriptionContainer = document.createElement("span");
    descriptionContainer.textContent = `: ${description}`;
    li.appendChild(descriptionContainer);
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  li.appendChild(deleteBtn);

  return li;
}
