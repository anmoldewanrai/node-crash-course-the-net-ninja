const http = require("http");

const server = http.createServer((req, res) => {
  // url and method props on req obj
  // console.log(req.url, req.method);

  //set header content type
  // plain text
  // res.setHeader("Content-type", "text/plain");
  // html
  res.setHeader("Content-type", "text/html");

  //write text to send
  // res.write("hello, ninjas");
  // write html
  res.write("<head><link rel='stylesheet' href='#' /></head>");
  res.write("<p>hello, ninjas</p>");

  //end the response stream
  res.end();
});

// setting up server to listen for incoming requests
server.listen(5000, "localhost", () => {
  console.log("listening for requests on port 5000");
});
