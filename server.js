const http = require("http");

const server = http.createServer(function(req, res) {
  console.log(req);
  res.end("Hello my name is Saeen!\n");
  //   console.log(
  //     "New request received from " + req.connection.remoteAddress + "at" + Date()
  //   );
});

server.listen(5000);
console.log("Node.js web server at port 5000 is running...");
