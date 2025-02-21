const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User } = require("../db/index");
const { Course } = require("../db/index");

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const value = await User.create({ username, password });

    if (value) {
      res.json({ message: "User created successfully" });
    } else {
      res.status(400).json({ message: "User not created" });
    }
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Signup failed" });
  }
});

router.get("/courses", async (req, res) => {
  try {
    const allCourses = await Course.find({});
    res.json({ courses: allCourses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Error fetching courses" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  try {
    const { courseId } = req.params;
    const username = req.headers.username;

    const result = await User.updateOne(
      { username: username },
      { $push: { purchasedCourses: courseId } }
    );

    if (result.modifiedCount > 0) {
      res.json({ message: "Purchase complete!!" });
    } else {
      res.status(400).json({ message: "Purchase not completed" });
    }
  } catch (error) {
    console.error("Purchase Error:", error);
    res.status(500).json({ message: "Purchase failed" });
  }
});


router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ 
      username: req.headers.username
     });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const courses = await Course.find({
      _id: {
         "$in" : user.purchasedCourses 
        },
    });

    res.json({ 
      courses
    });

  } catch (error) {
    console.log("Error fetching", error);
    res.status(500).json({ 
      message: "Error fetching courses" 
    });
  }
});

module.exports = router;
