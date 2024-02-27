const express = require("express");
const router = express.Router();
const Contact = require("../models/Contactmodels");

// GET route to fetch all contact data
router.get("/contacts", async (req, res) => {
  try {
    // Fetch all contacts from the database
    const contacts = await Contact.find();

    // Return the contacts as JSON response
    res.status(200).json(contacts);
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
