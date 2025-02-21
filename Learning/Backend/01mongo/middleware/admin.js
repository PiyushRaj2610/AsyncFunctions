const { Admin } = require("../db/index")

async function adminMiddleware(req, res, next){
  const username = req.headers.username;
  const password = req.headers.password;

  try {
    const value = await Admin.findOne({
      username: username,
      password: password
    })
    if ( value ) {
      next();
    } else {
      res.status(400).json({
        msg: "Admin doesn't exist"
      })
    }
  } catch (error) {
    console.log("Database query failed", error)
  }
}

module.exports = adminMiddleware;