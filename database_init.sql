/* Create DB user_search */
CREATE DATABASE user_search_test;

/* Connect to database */
\c user_search_test

/* Install postgis */
CREATE EXTENSION postgis;

/* Create table user_loc */
CREATE TABLE user_loc_test (
    id serial PRIMARY KEY,
    username VARCHAR ( 1000 ) UNIQUE NOT NULL,
    geom geometry(POINT, 4326)
);
