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
router.get('/search', function(req, res, next) {
    if (valid(req.params)) {
        // Using ST_DistanceSphere for decently fast, decently accurate global search
        // ST_DistanceSpheroid with earth spheroid could increase accuracy at some speed cost
        // Reprojection based on the location could speed up search even further 
        db.any("SELECT username FROM user_loc WHERE ST_DistanceSphere(geom, ST_GeomFromText('POINT($lon $lat)')) <= $radius",
        {
            lon: req.params.lon,
            lat: req.params.lat,
            radius: req.params.radius
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        })
    }
});

module.exports = router;
