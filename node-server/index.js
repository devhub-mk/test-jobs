const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  if (req.method === "GET") {
    const queryParams = parseUrl.query;
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ method: "Get", queryParams }));
  } else if (req.method === "POST") {
    res.end(JSON.stringify({ message: "Post request successful" }));
  } else {
    res.end(JSON.stringify({ error: "method under development" }));
  }
});

server.listen(3003, () => {
  console.log("server running on http://localhost:3003/");
});
