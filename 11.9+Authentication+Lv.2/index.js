import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt, { compare } from "bcrypt";

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "him@123",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
 } else{
       bcrypt.hash(password, saltRounds, async(err,hash) => {
      if(err){
      const result = ("Error hashing password:",err);
      }
      else{
       console.log("hashed password:", hash);
       await db.query("INSERT INTO users (email, password) VALUES ($1,$2)",[email, hash]);
      }
      res.render("secrets.ejs");
       })
       }
}catch (err) {
    console.log(err);
  }

});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const loginpassword = req.body.password;

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
          bcrypt.compare(loginpassword, storedHashedPassword, (err,result) => {
            if(err){
              console.log("Error comparing loginpassword",err);
            }
            else{
              if(result){
                console.log("secrets.ejs");             
               }
            else{
              console.log("Incorrect password");
            }
          }
          })
        
    }else {
      res.send("User not found");
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
