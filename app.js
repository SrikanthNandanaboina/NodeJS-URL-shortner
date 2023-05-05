const express = require("express");
require("dotenv").config();
const { db } = require("./src/models/db");
const linksRoute = require("./src/routes/links");
const redirRoute = require("./src/routes/redirection");

const app = express();
const port = 4545;

app.use(express.json());

app.use("/api/links", linksRoute);
app.use("/", redirRoute);

db.sync() // never force:true in prod, it drops dbs
  .then(() => console.log("db works"))
  .catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`Url shortner listening on port ${port}`);
});
