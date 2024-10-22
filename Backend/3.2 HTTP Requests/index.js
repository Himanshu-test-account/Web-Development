import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    // res.send("Hello, World!");
    res.send("<h1>hello</h1>");
   
}
);
app.get("/about", (req, res) => {

    res.send("<h1>about me</h1><P>My name is Himanshu</P>");
   }
);

app.get("/contact", (req, res) => {

    res.send("<h1>contact me</h1><P> ph.no: 999383849</P>");
   }
);


app.listen(3000, () => {
    console.log(`Server started on port ${port}.`);
});


// himan@LAPTOP-3UODO4OB MINGW64 ~/OneDrive/Desktop/himanshu/web development project
// $ cd 'c:/Users/himan/OneDrive/Desktop/himanshu/web development project/Backend'

// himan@LAPTOP-3UODO4OB MINGW64 ~/OneDrive/Desktop/himanshu/web development project/Backend
// $ mkdir "3.2 HTTP Request
// himan@LAPTOP-3UODO4OB MINGW64 ~/OneDrive/Desktop/himanshu/web development project/Backend
// $ cd 3.2\ HTTP\ Requests/

// himan@LAPTOP-3UODO4OB MINGW64 ~/OneDrive/Desktop/himanshu/web development project/Backend/3.2 HTTP Requests
// $ touch index.js

// himan@LAPTOP-3UODO4OB MINGW64 ~/OneDrive/Desktop/himanshu/web development project/Backend/3.2 HTTP Requests
// $ npm init -y
// Wrote to C:\Users\himan\OneDrive\Desktop\himanshu\web development project\Backend\3.2 HTTP Requests\package.json:

// {
//   "name": "3.2-http-requests",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC"
// }



// // himan@LAPTOP-3UODO4OB MINGW64 ~/OneDrive/Desktop/himanshu/web development project/Backend/3.2 HTTP Requests
// // $ npm i express



// // himan@LAPTOP-3UODO4OB MINGW64 ~/OneDrive/Desktop/himanshu/web development project/Backend/3.2 HTTP Requests
// // $
// $ npm install -g nodemon

// added 33 packages in 6s

// 3 packages are looking for funding
//   run `npm fund` for details

// himan@LAPTOP-3UODO4OB MINGW64 ~/OneDrive/Desktop/himanshu/web development project/Backend/3.2 HTTP Requests
// $ nodemon index.js