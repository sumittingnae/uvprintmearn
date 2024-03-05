const express = require("express");
const router = express.Router();
const User = require("../models/signuppage"); // Corrected import statement


router.get("/signup", async (req, res) => {
try {
    // Make sure to match the fields with your schema
    const count = await User.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create user" }); // Return 500 status code on error
  }
});

module.exports = router;
