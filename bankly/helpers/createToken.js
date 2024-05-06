const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");


/** return signed JWT for payload {username, admin}. */
// Check if payload somehow fails

function createToken(username, admin=false) {
  try{
    let payload = {username, admin};
    return jwt.sign(payload, SECRET_KEY);
  }
  catch(err){
    return next(err)
  }
}


module.exports = createToken;