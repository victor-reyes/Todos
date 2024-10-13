import * as http from "node:http";
import { addTodo, removeTodo, TODOS, TodoSchema } from "./core/todos";
import { getRoute, validateBody } from "./core/api-validation";

const port = 4444;
const host = "localhost";
let todos = TODOS;

const server = http.createServer(async (req, res) => {
  const url = req.url!;
  const method = req.method!;

  res.setHeader("access-control-allow-origin", "*");
  const route = getRoute(url, method);
  switch (route) {
    case "get_todos":
      res.end(JSON.stringify(todos));
      return;
    case "post_todo":
      const todo = await parseRequestToTodo(req, res);
      if (todo) {
        todos = addTodo(todos, todo);
      }
      res.end();
      return;
    case "delete_todo":
      const todoToRemove = await parseRequestToTodo(req, res);
      if (todoToRemove) {
        todos = removeTodo(todos, todoToRemove);
      }
      res.end();
      return;
    default:
      res.writeHead(400, `Route ${route} with method ${method} is not valid`);
      res.end();
      return;
  }
});

async function getBody(req: http.IncomingMessage): Promise<string> {
  let body = "";
  return await new Promise((resolve) => {
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => resolve(body));
  });
}

async function parseRequestToTodo(
  req: http.IncomingMessage,
  res: http.ServerResponse<http.IncomingMessage> & { req: http.IncomingMessage }
) {
  const contentLength = req.headers["content-length"];

  if (!contentLength || contentLength === "0") {
    res.writeHead(400);
    return;
  }

  const body = await getBody(req);
  if (!validateBody(body)) {
    res.writeHead(400, "The body should be a proper Todo json");
    return;
  }

  return TodoSchema.parse(JSON.parse(body));
}

server.listen(port, host, () => {});
