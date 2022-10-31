var express = require('express');
var router = express.Router();
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://pandasquad:pandapassword@localhost:5432/user_search_test')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Hello World!");
  // Example database query
  db.any('SELECT username FROM user_loc_test')
  .then((data) => {
    console.log('DATA:', data)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
