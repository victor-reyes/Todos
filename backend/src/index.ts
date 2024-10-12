import * as http from "node:http";
import { TODOS } from "./todo";

const port = 4444;
const host = "localhost";

const server = http.createServer(async (req, res) => {
  res.writeHead(200, {
    "access-control-allow-origin": "*",
  });
  res.end(JSON.stringify(TODOS));
});

server.listen(port, host, () => {});
