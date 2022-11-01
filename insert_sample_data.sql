/* Sample data for testing */
\c user_search

INSERT INTO user_loc (username, geom) VALUES ('Seattle', ST_GeomFromText('POINT(-122.2 47.37)', 4326));
INSERT INTO user_loc (username, geom) VALUES ('San Francisco', ST_GeomFromText('POINT(-122.25 37.47)', 4326));
INSERT INTO user_loc (username, geom) VALUES ('Vancouver', ST_GeomFromText('POINT(-123.06 49.15)', 4326));
INSERT INTO user_loc (username, geom) VALUES ('New York', ST_GeomFromText('POINT(-73.56 40.40)', 4326));
INSERT INTO user_loc (username, geom) VALUES ('Toronto', ST_GeomFromText('POINT(-79.24 43.42)', 4326));
INSERT INTO user_loc (username, geom) VALUES ('Orlando', ST_GeomFromText('POINT(-81.18 28.25)', 4326));
INSERT INTO user_loc (username, geom) VALUES ('Sydney', ST_GeomFromText('POINT(151.13 -33.52)', 4326));
INSERT INTO user_loc (username, geom) VALUES ('London', ST_GeomFromText('POINT(-0.08 51.3)', 4326));
INSERT INTO user_loc (username, geom) VALUES ('Beijing', ST_GeomFromText('POINT(116.23 39.55)', 4326));
INSERT INTO user_loc (username, geom) VALUES ('Cairo', ST_GeomFromText('POINT(31.14 30.03)', 4326));