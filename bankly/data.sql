-- Added database creation
DROP DATABASE IF EXISTS bankly;
CREATE DATABASE bankly;

\connect bankly;

CREATE TABLE IF NOT EXISTS users (
    username TEXT PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    password TEXT NOT NULL,
    admin BOOLEAN DEFAULT false
);
