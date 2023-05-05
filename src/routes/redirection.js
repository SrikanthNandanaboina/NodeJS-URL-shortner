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

route.get("/", async (req, res) => {
  return res.send(`
    <html>
      <body>

      <h2>Welcome to Short URL generator</h2>
      <h3>Below are available methods</h3>

      <h4>To create short link - /api/links : use postman</h4>
      <ul>
        <li>Method: POST</li>
        <li>Body: { link: "some link", code: "custom user code" }</li>
        <li>code is optional</li>
      </ul>

      <h4>To get original link data - /api/links/:code</h4>
      <ul>
        <li>Method: GET</li>
      </ul>

      <h4>To redirect using short link - /:code</h4>
      <ul>
        <li>Method: GET</li>
        <li>:code - custom code / generated code using above endpoint</li>
      </ul> 

      </body>
    </html>
  `);
});

module.exports = route;
