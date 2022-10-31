var express = require('express');
var router = express.Router();
const db = require('../database/connection')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Get all the users in the database
  db.any('SELECT username FROM user_loc_test')
  .then((data) => {
    res.send(data);
  })
  .catch((error) => {
    res.send(error);
  })
});

module.exports = router;
