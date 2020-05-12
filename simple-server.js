const http = require("http");

const server = http.createServer(function(req, res) {
  if (req.url === "/") {
    console.log("New req to main page at " + Date());
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><h1>This is home page.</h1></body></html>");
    res.write("<h2>The time is: " + Date() + "</h2>");
    res.end();
  } else if (req.url === "/student") {
    console.log("New request to Student page at " + Date());
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><h1>This is student page.</h1></body></html>");
    res.end();
  } else {
    // res.writeHead(400, { "Content-Type": "text/html" });
    res.end(
      "<html><body><h2>Invalid request at: " + Date() + "</h1></body></html>"
    );
  }
});

server.listen(5000);
console.log("Node.js web server at port 5000 is running...");
