const { User } = require("../db/index");
const { JWT_SECRET } = require("../config");

async function userMiddleware(req, res, next){
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

  if (decodedValue.username) {
    next();
  } else {
    res.status(400).json({
      message: "You are not authenticated"
    })
  }

}

module.exports = userMiddleware;