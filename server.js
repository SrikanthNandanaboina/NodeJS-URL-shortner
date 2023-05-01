const express = require("express");
const app = express();
const port = 4545;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Url shortner listening on port ${port}`);
});
