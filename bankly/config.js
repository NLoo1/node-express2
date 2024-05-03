/** Shared config for application; can be required many places. */

const dotenvConfig = { path: process.env.NODE_ENV ? ".env." + process.env.NODE_ENV : ".env" }
require("dotenv").config(dotenvConfig)

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD 
const DB_URI = process.env.DB_URI
const PORT = +process.env.PORT || 3000;


const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 10;

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  DB_USERNAME,
  DB_PASSWORD,
  DB_URI
};