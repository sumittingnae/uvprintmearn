const express = require("express");
const router = express.Router();
const Product = require("../models/productupload");

// GET route to fetch all contact data
router.get("/products", async (req, res) => {
  try {
    // Fetch all contacts from the database
    const product = await Product.find();

    // Return the contacts as JSON response
    res.status(200).json(product);
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
