import express from "express";
import bodyParser from "body-parser";
import pg from "pg";


const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "World",
  password: "him@123",
  port: 5432,
});
 db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted(){
    const result = await db.query("SELECT country_code FROM visited_countries");

    let countries = [];
    result.rows.forEach((country) => {
      countries.push(country.country_code);
    });
    return countries;
} 

app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length});
});
 
app.post("/add", async (req, res) =>{
  const input = req.body["country"];
   
  const result = await db.query(
    "SELECT country_code FROM countries where countries WHERE country_name = $1",
    [input]
  );

  if(result.rows.length !== 0){
    const data = result.rows[0];
    const countrycode = data.country_code;

    await db.query("INSERT INTO visited_countires (country_code) VALUES ($1)", [
      countrycode,
    ]);
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});