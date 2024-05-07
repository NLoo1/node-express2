- Removed duplicate export in app.js
- Changed sql seed to drop and create database before tables. Changed package.json test script accordingly
- Changed library versions in package for compatibility
- Changed config and db to import env variables and properly log into database

- BUG #1: authUser() doesn't handle bad tokens
- BUG #2: Added error handling for createToken helper in case of bad secret key
- BUG #3 + #4: user model getAll() and get() does not check for logged in. Changed and added tests for authenticate().
- BUG #5: no JSON validation for user patch
  