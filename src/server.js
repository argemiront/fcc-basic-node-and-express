const express = require("express");

// Put console log below


const app = express();

console.log("Hello World");

app.get("/", (req, res) => {
  res.send("Hello Express");
});

const server = app.listen(process.env.PORT || 3000);

// -- DO NOT EDIT BELOW THIS LINE. SERIOUSLY

module.exports = server;
