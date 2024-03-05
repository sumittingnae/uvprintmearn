const express = require("express");
const router = express.Router();
const Contact = require("../models/Contactmodels"); // Corrected import statement

router.get("/contact", async (req, res) => {
  try {
    // Make sure to match the fields with your schema
    const count = await Contact.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create user" }); // Return 500 status code on error
  }
});

module.exports = router;
