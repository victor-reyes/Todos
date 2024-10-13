import { describe, test } from "node:test";
import assert from "node:assert";
import { validateRoute } from "./api-validation";

describe("Route", () => {
  test("should return false if the route is empty", () => {
    assert.deepStrictEqual(validateRoute(undefined), false);
  });

  test("should validate wheather the route is allowed", () => {
    assert.deepStrictEqual(validateRoute("/"), false);
    assert.deepStrictEqual(validateRoute("/api/todos"), false);
    assert.deepStrictEqual(validateRoute("/api/v1/todos"), true);
    assert.deepStrictEqual(validateRoute("/api/v1/todo"), true);
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
