const express = require("express");

const router = express.Router();

//@Route    POST api/users
//@desc     Register a user
//@access   Public

router.post("/", (req, res) => {
  res.send("Register a user");
});

module.exports = router;
