import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import multer from "multer";
import connectToMongoDB from "./database/db.js";
import { insertFormData } from "./database/db.js";
const PORT = 5050;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/uploads"));
  },
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "avatar" + "-" + uniqueSuffix + fileExtension);
  },
});

const upload = multer({ storage: storage });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
connectToMongoDB();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/index.html"));
});

app.post("/", upload.single("avatar"), async(req, res) => {
  const avatar = req.file.filename;
  const addresses = [];
  addresses.push({
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  });
  delete req.body.city;
  delete req.body.state;
  delete req.body.zip;

  req.body.avatar = avatar;
  req.body.addresses = addresses;

  const response = await insertFormData(req.body);

  if (response.message){
    res.status(201).json(response);
  }
  if (response.error){
    res.status(500).json(response);
  }
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
