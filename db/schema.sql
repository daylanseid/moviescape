DROP DATABASE IF EXISTS moviescape_db;
CREATE DATABASE moviescape_db;

DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS movies;

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255)
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR (255),
  starring TEXT,
  year INTEGER,
  description TEXT,
  img TEXT,
  locations_id INTEGER REFERENCES locations(id)
);