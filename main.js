const express = require("express");

const app = express();

app.listen(3000, function() {
  console.log("Listening on port 3000!");
});

app.get("/", function(req, res) {
  //   res.end("Welcome to your first Exprss application!");
  let myObj = {
    name: "Saeen",
    age: "33"
  };
  res.json(myObj);
});

app.get("/student", function(req, res) {
  res.status(400).send("You are in the wrong page!");
  //   res.end("You are in Student page!");
});

app.get("/**", (req, res) => {
  res.send("Error");
});
