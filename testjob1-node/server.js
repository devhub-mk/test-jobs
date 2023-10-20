const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = 5001;

const server = http.createServer((req, res) => {
  console.log(req.url);
  let filepath;
  
  if (req.url == "/") {
    filepath = path.join(__dirname, "html", "index.html");
  } else if (req.url == "/about") {
    filepath = path.join(__dirname, "html", "about.html");
  } else if (req.url == "/term-and-conditions") {
    filepath = path.join(__dirname, "html", "term-and-conditions.html");
  } else {
    filepath = path.join(__dirname, "html", "notfound.html");
    res.statusCode = 404;
  }

  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Internal Server Error");
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}/`);
});
