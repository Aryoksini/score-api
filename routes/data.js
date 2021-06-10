const scoreBing = require("scorebing-api");
var cors = require("cors");

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", cors(), function (req, res, next) {
  const score = new scoreBing();

  score.req(0).then((response) => {
    let data = response;
    res.send(data);
  });
});

module.exports = router;
