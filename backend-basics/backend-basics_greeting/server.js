import { createServer } from "node:http";

export const server = createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.end("Hello, [your name]!");
});
