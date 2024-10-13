import * as http from "node:http";
import { TODOS } from "./todo";
import { validateRoute } from "./api-validation";

const port = 4444;
const host = "localhost";

const server = http.createServer(async (req, res) => {
  const route = req.url;
  
  if(!validateRoute(route)){
    res.writeHead(400, `Route ${route} is allowed`)
    res.end()
  }

  const contentLength = req.headers["content-length"];
  if (!contentLength || contentLength === "0") {
    res.writeHead(400);
    res.end();
    return;
  }

  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", () => {
    console.log(`body is ${body}`);
    res.writeHead(200, {
      "access-control-allow-origin": "*",
    });
    res.end(JSON.stringify(TODOS));
  });
});

server.listen(port, host, () => {});
