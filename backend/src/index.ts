import * as http from "node:http";

const port = 4444;
const host = "localhost";

const server = http.createServer(async (req, res) => {
  res.writeHead(200, {
    "access-control-allow-origin": "*",
  });
  res.end("Backend is running!");
});

server.listen(port, host, () => {});
