import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
 try{
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {secret: result.data.secret, user: result.data.username});
  }catch {
    console.log(error.response.data);
    res.status(500);
  }
  });

app.post("/get-secret", async (req, res) => {
    const searchId = req.body.id;
    try {
      const result = await axios.get(API_URL + "/secrets/" + searchId, config);
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
      res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }
  
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
