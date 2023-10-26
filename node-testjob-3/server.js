import http from "http";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import formidable from "formidable";
import connectToMongoDB, {
  insertFormData,
} from "./database/connectToMongoDB.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectToMongoDB();

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.method === "POST" && req.url === "/user-data-collector") {
    try {
      const form = formidable({
        uploadDir: path.join(__dirname, "uploads"),
        keepExtensions: true,
      });

      form.parse(req, (err, fields, files) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Internal Server Error" }));
        }

        const filename = files.avatar[0].newFilename;

        const formData = {
          firstName: fields.firstName[0],
          lastName: fields.lastName[0],
          age: parseInt(fields.age[0]),
          gender: fields.gender[0],
          city: fields.city[0],
          email: fields.email[0],
          avatar: {
            filename: filename,
            path: `http://localhost:4040/uploads/${filename}`,
          },
        };

        if (
          !formData.firstName ||
          !formData.gender ||
          !formData.email ||
          !filename
        ) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "All fields are required" }));
        }

        insertFormData(formData);
        res.writeHead(201, "Content-Type", "application/json");
        res.end(JSON.stringify({ message: "User saved successfully" }));
      });
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Internal Server Error" }));
    }
  }
});

const PORT = 4040;

server.listen(PORT, () => {
  console.log(`Server is listening on: http://localhost:${PORT}`);
});
