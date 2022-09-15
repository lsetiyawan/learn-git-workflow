require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.get("/api", (req, res) => {
  res.send("Api baru nih!");
});

app.listen(port, () => {
  console.log("Server is up and running on port : " + port);
});
