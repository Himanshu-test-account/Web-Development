import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try{
       const result = await axios.get();
       res.render("index.ejs", {secret: result.data.secret, user: result.data.username});
     }catch {
       console.log(error.response.data);
       res.status(500);
     }
     });