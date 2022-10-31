const pgp = require('pg-promise')(/* options */)
// Change to username:password for user with permissions to host:port/database
const db = pgp('postgres://pandasquad:pandapassword@localhost:5432/user_search_test')

module.exports = db;