var express = require('express');
var router = express.Router();
const db = require('../database/connection')

/* Validate request params for searching users by location in the database.*/
function valid(params) {
    // params should have lon, lat, and radius
    if (params.hasOwnProperty('lon') && params.hasOwnProperty('lat') && params.hasOwnProperty('radius')) {
        // 0 < radius <= 6378
        if (params.radius <= 0 || params.radius > 6378) {
            return false;
        }
        // -180 <= lon <= 180
        if (params.lon > 180 || params.lon < -180) {
            return false;
        }
        // -90 <= lat <= 90
        if (params.lat > 90 || params.lat < -90) {
            return false;
        }
        // all conditions checked, therefore it is valid
        return true;
    }
    // failed to have the required params, therefore it is invalid
    return false;
}

/* Search for a set of users by location. */
router.get('/', function(req, res, next) {
    if (valid(req.query)) {
        // Using ST_DistanceSphere for decently fast, decently accurate global search
        // ST_DistanceSpheroid with earth spheroid could increase accuracy at some speed cost
        // Reprojection based on the location could speed up search even further 
        db.any("SELECT username FROM user_loc_test WHERE ST_DistanceSphere(geom, ST_GeomFromText('POINT($lon $lat)', 4326)) <= $radius",
        {
            lon: req.query.lon,
            lat: req.query.lat,
            radius: req.query.radius
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        })
    } else {
        res.send("Error: request params invalid");
    }
});

module.exports = router;
