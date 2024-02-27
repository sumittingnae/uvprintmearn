const express = require("express");
const router = express.Router();
const Contact = require("../models/Contactmodels"); // Adjust the import path if necessary

// Example of a POST route to create a new contact
router.post("/contact", async (req, res) => {
  try {
    // Destructure contact details from req.body
    const { name, email, contact, address, message } = req.body;

    // Validate required fields
    if (!name || !email || !contact || !address || !message) {
      return res
        .status(400)
        .json({
          error: "Name, email, contact, address, and message are required",
        });
    }
 

    // Create a new contact document
    const newContact = new Contact({
      name,
      email,
      contact,
      address,
      message,
    });

    // Save the contact to the database
    await newContact.save();

    // Return a success message
    res.status(201).json({ message: "Contact created successfully" });
  } catch (error) {
    // Handle errors appropriately
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
