import * as http from "node:http";
import { TODOS } from "./todo";
import { validateBody, validateRoute } from "./api-validation";

const port = 4444;
const host = "localhost";

const server = http.createServer(async (req, res) => {
  const route = req.url;

  if (!validateRoute(route)) {
    res.writeHead(400, `Route ${route} is allowed`);
    res.end();
  }

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

  res.writeHead(200, {
    "access-control-allow-origin": "*",
  });

  res.end();
});

async function getBody(req: http.IncomingMessage): Promise<string> {
  let body = "";
  return await new Promise((resolve) => {
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => resolve(body));
  });
}

server.listen(port, host, () => {});
