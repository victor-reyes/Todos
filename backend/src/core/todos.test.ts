import { describe, it } from "node:test";
import assert from "node:assert";
import { addTodo, removeTodo } from "./todos";

describe("Todos", () => {
  it("Should add todo", () => {
    const todos = [{ title: "title" }, { title: "title", description: "description" }];

    const todoToAdd = { title: "title", description: "whatever" };

    assert.deepStrictEqual(addTodo(todos, todoToAdd), [
      { title: "title", description: "whatever" },
      { title: "title" },
      { title: "title", description: "description" },
    ]);
  });

  it("Should add todo", () => {
    const todos = [
      { title: "title", description: "whatever" },
      { title: "title" },
      { title: "title", description: "description" },
    ];

    const todoToRemove = { title: "title", description: "whatever" };

    assert.deepStrictEqual(removeTodo(todos, todoToRemove), [
      { title: "title" },
      { title: "title", description: "description" },
    ]);
  });
});
