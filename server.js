// Import Dependencies
const express = require("express");
const cors = require("cors");

// Import JSON files
const users = require("./users.json");

// Create app object
const app = express();

// set up middleware
app.use(cors());

//home route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// route for retrieving projects
app.get("/users", (req, res) => {
  // send users via JSON
  res.json(users);
});

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));