const api = "http://localhost:9000/";

// POST add
// localhost:9000/add?username=Salt Lake City&lon=-110&lat=40
var addAPI = api + `add?username=${username}&lon=${lon}&lat=${lat}`;

// GET search
// localhost:9000/search?lon=-120&lat=47&radius=1000
var searchAPI = api + `search?lon=${lon}&lat=${lat}&radius=${radius}`;