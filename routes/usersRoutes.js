var express = require('express');
var router = express.Router();
var uModel = require("../models/usersModel")
const passport = require("passport");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log("Sending all users");
  let result = await uModel.getUsers();
  res.status(result.status).send(result.data);
});

module.exports = router;
