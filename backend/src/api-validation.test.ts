import { describe, test } from "node:test";
import assert from "node:assert";

describe("Route", () => {
  test("should return false if empty", () => {
    const route = "";
    assert.deepStrictEqual(validateRoute(route), false);
  });

  test("should return false/true if route is allowed or not", () => {
    assert.deepStrictEqual(validateRoute("/"), false);
    assert.deepStrictEqual(validateRoute("/api/v1/todos"), true);
    assert.deepStrictEqual(validateRoute("/api/todos"), false);
  });
});
