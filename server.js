const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // url and method props on req obj
  // console.log(req.url, req.method);

  //set header content type
  // plain text
  // res.setHeader("Content-type", "text/plain");
  // html
  res.setHeader("Content-type", "text/html");

  // sending html file(s)
  fs.readFile("./views/index.html", (err, data) => {
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
