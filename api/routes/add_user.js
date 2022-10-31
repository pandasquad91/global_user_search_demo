var express = require('express');
var router = express.Router();
const db = require('../database/connection')

/* Validate a request body for adding a new user to the database.*/
function valid(body) {
    // body should have username, lon, and lat
    if (body.hasOwnProperty('username') && body.hasOwnProperty('lon') && body.hasOwnProperty('lat')) {
        // username should be string <= 1000 length
        if (body.username.length > 1000) {
            return false;
        }
        // -180 <= lon <= 180
        if (body.lon > 180 || body.lon < -180) {
            return false;
        }
        // -90 <= lat <= 90
        if (body.lat > 90 || body.lat < -90) {
            return false;
        }
        // all conditions checked, therefore it is valid
        return true;
    }
    // failed to have the required payload, therefore it is invalid
    return false;
}

/* Add a user. */
router.post('/add', function(req, res, next) {
    // validate request body has necessary and accurate parameters
    if (valid(req.body)) {
        // use elements in request body for insertion
        db.none("INSERT INTO user_loc_test (username, geom) VALUES ('$username', ST_GeomFromText('POINT($lon $lat)', 4326))",
        {
            username: req.body.username,
            lon: req.body.lon,
            lat: req.body.lat
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error)
        })
    } else {
        res.send("Error: payload invalid");
    }
});

module.exports = router;
