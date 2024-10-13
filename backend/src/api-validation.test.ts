import { describe, test } from "node:test";
import assert from "node:assert";

describe("Route", () => {
  test("should return false if empty", () => {
    const route = "";
    assert.deepStrictEqual(validateRoute(route), false);
  });
});
