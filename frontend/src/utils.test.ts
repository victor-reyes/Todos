import assert from "node:assert";
import { before, describe, it } from "node:test";
import { JSDOM } from "jsdom";
import { createListElement } from "./utils";

describe("Utils", () => {
  let dom: JSDOM;

  before(() => {
    dom = new JSDOM("<!DOCTYPE html><body></body>");
    global.document = dom.window.document;
  });

  it("should return li with bold title", () => {
    const todo = { title: "title" };

    const li: HTMLLIElement = createListElement(todo);
    const title = li.firstChild as Element;

    assert.strictEqual(li.children.length, 1);
    assert.strictEqual(title.tagName, "B");
    assert.strictEqual(title.textContent, "title");
  });
});
