// import express
const express = require("express");

// express app
const app = express();

// listen for requests
app.listen(5000);

// request routes

// home route
app.get("/", (req, res) => {
  // res.send("<p>hello world</p>");
  // Syntax One
  res.sendFile("./views/index.html", { root: __dirname });
});

// about route
app.get("/about", (req, res) => {
  // res.send("<p>About page</p>");
  // Syntax Two
  res.sendFile(
    "D:/Projects/Code/node-crash-course-the-net-ninja/views/about.html"
  );
});

// about-me (redirect)
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
  console.log("use function ran");
});
