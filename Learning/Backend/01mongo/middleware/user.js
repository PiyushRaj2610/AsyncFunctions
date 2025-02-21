const { User } = require("../db/index");

async function userMiddleware(req, res, next){
  const username = req.headers.username;
  const password = req.body.password;

  const value = await User.findOne({
    username: username,
    password: password
  })
  if (value) {
    next();
  } else {
    res.status(400).json({
      msg: "User doesn't exist"
    })
  }
}

module.exports = userMiddleware;