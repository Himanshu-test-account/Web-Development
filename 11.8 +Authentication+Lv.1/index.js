import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try{
    const checkResult = await db.query("SELECT * FROM users WHERE ($1)",[email]);

    if(checkResult.row.length > 0){
      const result = await db.query("The user already exist");
    }
    else{
      const result = await db.query("INSERT INTO users (email, password) VALUES ($!,$!)",[email,password])
    };
   console.log(result);
   res.render("secrets.ejs");
  }
  catch(err){
    console.log(err);
  }
 
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
   
  try{
    const result = await db.query("SELECT * FROM users WHERE ($1)",[email]);

    if(result.row.length > 0){
        const user = result.rows[0];
        const storedpassword  = user.password;

    if(password === storedpassword){
       res.render("secrets.ejs");
    }else{
       res.send("Incorrect password");
    }
  }
  else{
       res.send("user doesn't exist");
    }
  }catch(err){
    console.log(err);
  }
  

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
