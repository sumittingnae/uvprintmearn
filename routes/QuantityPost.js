const express = require("express");
const router = express.Router();
const Qutotion = require("../models/Qutotion"); // Adjust the import path if necessary

// Example of a POST route to create a new contact
router.post("/quantity", async (req, res) => {
  try {
    // Destructure contact details from req.body
    const { name, email, contact, wptb, size, quantity, material } = req.body;

    // Validate required fields
    if (!name || !email || !contact || !size || !quantity||!material||!wptb) {
      return res.status(400).json({
        error: "Name, email, contact, quantity,  material and wptb are required",
      });
    }

    // Create a new contact document
    const newQutotion = new Qutotion({
      name,
      email,
      contact,
      wptb,
      size,
      quantity,
      material,
    });

    // Save the contact to the database
    await newQutotion.save();

    // Return a success message
    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    // Handle errors appropriately
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
