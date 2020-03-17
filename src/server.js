const express = require("express");

const app = express();

console.log("Hello World");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const server = app.listen(process.env.PORT || 3000);

// -- DO NOT EDIT BELOW THIS LINE

module.exports = server;
