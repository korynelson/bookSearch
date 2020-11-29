const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bookroutes = require("./routes/books");
const axios = require('axios')
require('dotenv').config();
const API_KEY = process.env.GOOGLEBOOKS_API_KEY || process.env.API_KEY ;

//initializes mongoose connection;
require("./db");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(bookroutes);

// Google Book Api search route
app.get('/google:query', async (request, response) => {
  console.log(request.params);
  const q = request.params.query;
  const search_url = `https://www.googleapis.com/books/v1/volumes?q=${q}&key=${API_KEY}`;
  const books = await axios.get(search_url).then((res) =>{
    return res.data
  })
    return response.json(books) 
});


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
