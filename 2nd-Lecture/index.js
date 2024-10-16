require('dotenv').config()

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  try {
    res.send("Hi, this is the response");
  } catch {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/twitter", (req, res) => {
  try {
    res.send("This is the Twitter response");
  } catch (err) {
    console.log(err);
  }
});

app.get("/login", (req, res) => {
  try {
    res.send('<h1>Hi this is a login page<h1/>');
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`The port is running on ${process.env.PORT}`);
});
