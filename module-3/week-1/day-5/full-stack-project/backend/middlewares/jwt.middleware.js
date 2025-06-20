const jwt = require("jsonwebtoken");

function isAuthenticated(req, res, next) {
  //check the headers for something named authorization and then is it structured 'Bearer theToken'
  if (req.headers.authorization) {
    if (req.headers.authorization.split(" ")[0] === "Bearer") {
      const theToken = req.headers.authorization.split(" ")[1];
      const payload = jwt.verify(theToken, process.env.TOKEN_SECRET);
      req.payload = payload;
      next();
    } else {
      res.status(403).json({ errorMessage: "header malformed" });
    }
  } else {
    res.status(403).json({ errorMessage: "No token present" });
  }
}

//make sure to export the middleware to use it in other files
module.exports = { isAuthenticated };
