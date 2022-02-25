const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // setting html header
  res.setHeader("Content-type", "text/html");

  // routing using switch
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      // status code
      res.statusCode = 200; //OK
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.setHeader("Location", "/about");
      res.statusCode = 301; //Redirect
      break;
    default:
      path += "404.html";
      res.statusCode = 404; //Resource Not Found
      break;
  }

  // sending html file(s)
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

// setting up server to listen for incoming requests
server.listen(5000, "localhost", () => {
  console.log("listening for requests on port 5000");
});
