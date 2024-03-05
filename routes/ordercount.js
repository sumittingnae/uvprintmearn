const express = require("express");
const router = express.Router();
const Order = require("../models/Qutotion");

// GET route to fetch all contact data
router.get("/quantitycount", async (req, res) => {
  try {
    // Fetch all contacts from the database
    // const product = await Order.find();
    const count = await Order.countDocuments();
    // Return the contacts as JSON response
    res.status(200).json({ count });
    console.log(count);
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
