/* Sample data for testing */
\c user_search

INSERT INTO user_loc (username, geom) VALUES ('Seattle', ST_GeomFromText('POINT(47.37 -122.2)', 4326))
INSERT INTO user_loc (username, geom) VALUES ('San Francisco', ST_GeomFromText('POINT(37.47 -122.25)', 4326))
INSERT INTO user_loc (username, geom) VALUES ('Vancouver', ST_GeomFromText('POINT(49.15 -123.06)', 4326))
INSERT INTO user_loc (username, geom) VALUES ('New York', ST_GeomFromText('POINT(40.40 -73.56)', 4326))
INSERT INTO user_loc (username, geom) VALUES ('Toronto', ST_GeomFromText('POINT(43.42 -79.24)', 4326))
INSERT INTO user_loc (username, geom) VALUES ('Orlando', ST_GeomFromText('POINT(28.25 -81.18)', 4326))
INSERT INTO user_loc (username, geom) VALUES ('Sydney', ST_GeomFromText('POINT(-33.52 151.13)', 4326))
INSERT INTO user_loc (username, geom) VALUES ('London', ST_GeomFromText('POINT(51.30 -0.08)', 4326))
INSERT INTO user_loc (username, geom) VALUES ('Beijing', ST_GeomFromText('POINT(39.55 116.23)', 4326))
INSERT INTO user_loc (username, geom) VALUES ('Cairo', ST_GeomFromText('POINT(30.03 31.14)', 4326))
