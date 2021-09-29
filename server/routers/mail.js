const express = require("express");
const { mailController } = require("../controllers");
const router = express.Router();

router
  .route("/send")
  .get((req, res) => {
    res.send({
      data: `${req.baseUrl}${req.url} is a post route handling email related stuff`,
    });
  })
  .post(mailController);

module.exports = router;
