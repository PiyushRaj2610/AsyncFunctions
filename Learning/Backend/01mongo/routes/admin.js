const { Router } = require("express");
const {Admin} = require("../db/index")
const {Course} = require("../db/index")
const adminMiddleware = require("../middleware/admin");
const router = Router();

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const value = await Admin.create({
    username: username,
    password: password
  })
  if ( value ){
    res.json({
      message: "Admin created successfully"
    })
  } else{
    res.status(400).json({
      message: "Admin is not created"
    })
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price
  })
  if(newCourse){
    res.json({
      message: "Course created successfully",
      courseId: newCourse._id
    })
  } else {
    res.status(400).json({
      message: "Course not created"
    })
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const allCourses = await Course.find({})
  res.json({
    courses: allCourses
  })
});

module.exports = router;