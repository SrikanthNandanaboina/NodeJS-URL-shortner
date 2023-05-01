const express = require("express");
require("dotenv").config();
const app = express();
const port = 4545;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Url shortner listening on port ${port}`);
});
