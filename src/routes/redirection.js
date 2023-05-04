const { Router } = require("express");
const { findLongUrl } = require("../services/url-service");
const route = Router();

route.get("/:code", async (req, res) => {
  const code = req.params.code;
  // TODO: validate code is available

  const url = await findLongUrl(code);

  if (url) {
    return res.redirect(url.link);
  } else {
    return res.send("No such url found");
  }
});

module.exports = route;