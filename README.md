# Global User Search Demo

A basic fullstack application for adding and searching for users anywhere in the world.

## Installation

This application requires installation of the following:
 - PostGIS: https://postgis.net/workshops/postgis-intro/installation.html
 - NodeJS and npm: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Recommended to use [nvm](https://github.com/nvm-sh/nvm) and the most recent long term service version of node. (`nvm install --lts && nvm use --lts`)


## Database Initialization

To initialize the database: `psql -f database_init.sql`

To import some sample data for testing the project: `psql -f insert_sample_data.sql`


### Database Connection

Define the database connection in `/api/database/connection.js` using the correct username and password combination for your postgres user with access to the database you've initialized.


## API Server

Navigate to `/api`. Run `npm install` to install all necessary dependencies.

Start the server with `npm start`.


## Front End Client

Navigate to `/client`. Start the front end client with `npm start`.