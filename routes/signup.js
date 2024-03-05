const express = require("express");
const router = express.Router();
const User = require("../models/signuppage"); // Corrected import statement
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const secPassword = await bcrypt.hash(req.body.password, salt);
  try {
    // Make sure to match the fields with your schema
    await User.create({
      name: req.body.name,
      username: req.body.username,
      password: secPassword,
      // Add other fields as needed
    });
    res.json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create user" }); // Return 500 status code on error
  }
});

module.exports = router;
