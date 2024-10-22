import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.post("/submit", (req, res ) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// himan@LAPTOP-3UODO4OB MINGW64 ~/OneDrive/Desktop/himanshu/web development project/Backend/3.4 Middleware
// $ npm i body-parser

// added 65 packages, and audited 66 packages in 12s

// 8 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities

// himan@LAPTOP-3UODO4OB MINGW64 ~/OneDrive/Desktop/himanshu/web development project/Backend/3.4 Middleware
// // $ nodemon index1.js