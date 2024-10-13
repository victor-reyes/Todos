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
    const title = li.children[0];
    const deleteButton = li.children[1];

    assert.strictEqual(li.children.length, 2);
    assert.strictEqual(title.tagName, "B");
    assert.strictEqual(title.textContent, "title");

    assert.strictEqual(deleteButton.tagName, "BUTTON");
    assert.strictEqual(deleteButton.textContent, "Delete");
  });

  it("should return li with bold title and description", () => {
    const todo = { title: "title", description: "description" };

    const li: HTMLLIElement = createListElement(todo);
    const title = li.children[0];
    const description = li.children[1];
    const deleteButton = li.children[2];

    assert.strictEqual(li.children.length, 3);
    assert.strictEqual(title.tagName, "B");
    assert.strictEqual(title.textContent, "title");

    assert.strictEqual(description.tagName, "SPAN");
    assert.strictEqual(description.textContent, ": description");

    assert.strictEqual(deleteButton.tagName, "BUTTON");
    assert.strictEqual(deleteButton.textContent, "Delete");
  });
});
