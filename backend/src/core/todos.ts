import { z } from "zod";

const TodoSchema = z
  .object({
    title: z.string(),
    description: z.string().optional(),
  })
  .strict();

type Todo = z.infer<typeof TodoSchema>;

function addTodo(todos: Todo[], todo: Todo) {
  return [todo, ...todos];
}

function removeTodo(todos: Todo[], todoToRemove: Todo) {
  return todos.filter((todo) => todo.title !== todoToRemove.title || todo.description !== todoToRemove.description);
}

const TODOS: Todo[] = [
  { title: "Buy groceries", description: "Remember to buy milk, eggs, and bread." },
  { title: "Write a blog post", description: "Topic: JavaScript Closures." },
  { title: "Exercise for 30 minutes", description: "Include stretching and cardio." },
  { title: "Plan weekend trip", description: "Decide on the destination and bookings." },
  { title: "Read a book", description: "Finish reading the current chapter." },
  { title: "Call a friend", description: "Catch up on life updates." },
  { title: "Attend online course", description: "Complete Module 3: Advanced Topics." },
  { title: "Water the plants", description: "Ensure all plants receive adequate water." },
  { title: "Buy a gift", description: "Select a meaningful present for the occasion." },
  { title: "Organize workspace", description: "Declutter desk and organize files." },
];

export { TODOS, TodoSchema, addTodo, removeTodo };
