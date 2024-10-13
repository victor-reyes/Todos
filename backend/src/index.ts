import * as http from "node:http";
import { TODOS, TodoSchema } from "./todos";
import { getRoute, validateBody } from "./api-validation";

const port = 4444;
const host = "localhost";
const todos = TODOS;

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
      const contentLength = req.headers["content-length"];

      if (!contentLength || contentLength === "0") {
        res.writeHead(400);
        res.end();
        return;
      }

      const body = await getBody(req);
      if (!validateBody(body)) {
        res.writeHead(400, "The body should be a proper Todo json");
        res.end();
        return;
      }

      const todo = TodoSchema.parse(JSON.parse(body));
      todos.unshift(todo);

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

server.listen(port, host, () => {});
