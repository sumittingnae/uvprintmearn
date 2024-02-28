const express = require("express");
const router = express.Router();

const Product = require("../models/productupload"); // Adjust the import path if necessary

// Set up multer for file uploads
router.get("/products/_id", async (req, res) => {
  // Corrected route parameter
  try {
    const product = await Product.findById(req.params._id); // Corrected parameter name
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    } else {
      return res.status(200).json(product);
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
