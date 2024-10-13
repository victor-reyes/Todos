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
