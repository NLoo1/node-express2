-- Added database creation
DROP DATABASE bankly IF EXISTS;
CREATE DATABASE bankly;

\connect bankly

CREATE TABLE users (
    username text PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL,
    admin boolean DEFAULT false
);

-- Added seed
INSERT INTO users (username, first_name, last_name, email, phone, password) VALUES 
("NLoo", "Nick", "Loo", "Nick@Loo.com", "1234567890", "password");
