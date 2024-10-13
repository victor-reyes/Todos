import { describe, test } from "node:test";
import assert from "node:assert";
import { validateBody } from "./api-validation";

describe("Route", () => {
  test("should a Route for valid urls and methods", () => {
    assert.deepStrictEqual(getRoute("/api/v1/todos", "GET"), "get_todos");
    assert.deepStrictEqual(getRoute("/api/v1/todo", "POST"), "post_todo");
  });
  test("should return null for not valid urls and methods", () => {
    assert.deepStrictEqual(getRoute("/api/v1/todo", "GET"), null);
    assert.deepStrictEqual(getRoute("/api/v1/todos", "POST"), null);
    assert.deepStrictEqual(getRoute("/api/v1/todo", "PUT"), null);
  });
});

describe("Body", () => {
  test("should be a of type Todo", () => {
    let bodyJson = JSON.stringify({ title: "Assigment", description: "Be done by Saturday" });
    let wrongBodyJson = JSON.stringify({ title: "Pride and Prejudice", author: "Jane Austen" });

    assert.deepStrictEqual(validateBody(bodyJson), true);
    assert.deepStrictEqual(validateBody(wrongBodyJson), false);
  });
});
