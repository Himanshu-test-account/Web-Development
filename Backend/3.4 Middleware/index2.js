import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;

app.use(morgan("tiny"));


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// $ npm i morgan

// up to date, audited 66 packages in 1s

// 8 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities

// himan@LAPTOP-3UODO4OB MINGW64 ~/OneDrive/Desktop/himanshu/web development project/Backend/3.4 Middleware
// $ nodemon index2.js
// [nodemon] 3.0.1
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node index2.js`
// Listening on port 3000
// GET / 200 5 - 5.769 ms