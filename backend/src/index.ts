import * as http from "node:http";

const port = 4444;
const host = "localhost";

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.end("Backend is running!");
});

server.listen(port, host, () => {});
