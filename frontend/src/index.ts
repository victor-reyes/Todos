const form = document.getElementById("form") as HTMLFormElement;
const todoTitle = document.getElementById("title") as HTMLFormElement;
const todoDescription = document.getElementById("description") as HTMLFormElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = todoTitle.value;
  const description = todoDescription.value;
  const todo = { title, description };
  console.log(todo);

  getData();
});

async function getData() {
  const responce = await fetch("http://localhost:4444");
  console.log(await responce.json());
}
