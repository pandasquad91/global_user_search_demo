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

/* Given a valid request body, generate the insertion command. */
function generateInsertFromParams(params) {
    let username = params.username;
    let lon = params.lon;
    let lat = params.lat;
    return `INSERT INTO user_loc (username, geom) VALUES ('${username}', ST_GeomFromText('POINT(${lon} ${lat})', 4326))`;
}

/* Add a user. */
router.post('/', function(req, res, next) {
    // validate request body has necessary and accurate parameters
    if (valid(req.query)) {
        // use elements in request body to generate the insertion command
        let insert = generateInsertFromParams(req.query);
        // insert the new user into the database
        db.none(insert)
        .then(() => {
            res.send("Successfully inserted data");
        })
        .catch((error) => {
            res.send(error)
        })
    } else {
        res.send("Error: payload invalid");
    }
});

module.exports = router;
