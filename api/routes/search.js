var express = require('express');
var router = express.Router();
const db = require('../database/connection')

/* Validate request params for searching users by location in the database.*/
function valid(params) {
    // params should have lon, lat, and radius
    if (params.hasOwnProperty('lon') && params.hasOwnProperty('lat') && params.hasOwnProperty('radius')) {
        // 0 < radius <= 40075
        if (params.radius <= 0 || params.radius > 40075) {
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

/* Given a valid request query, generate the database query. */
function generateQueryFromParams(params) {
    let lon = params.lon;
    let lat = params.lat;
    // expecting to receive radius in km, but PostGIS operates in meters, so convert it
    let radius = params.radius * 1000;
    // Using ST_DistanceSphere for decently fast, decently accurate global search
    // ST_DistanceSpheroid with earth spheroid could increase accuracy at some speed cost
    // Reprojection based on the location could speed up search even further
    return `SELECT username FROM user_loc_test WHERE ST_DistanceSphere(geom, ST_GeomFromText('POINT(${lon} ${lat})', 4326)) <= ${radius}`
}

/* Search for a set of users by location. */
router.get('/', function(req, res, next) {
    if (valid(req.query)) {
        let query = generateQueryFromParams(req.query);
        db.any(query)
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
