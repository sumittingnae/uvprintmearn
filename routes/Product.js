const express = require("express");
const router = express.Router();
const Product = require("../models/productupload"); // Adjust the import path if necessary
const multer =require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Define the destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Define the filename
  },
});
const upload = multer({ storage: storage });
// Example of a POST route to create a new contact
router.post("/products", upload.single("image"), async (req, res) => {
  try {
    // Create a new product object with data from the request body
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description,
      image: req.file.path, // Save the path of the uploaded image
    });
    // Save the product to the database
    await product.save();
    res.send("Product created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
// Set up multer for file uploads


module.exports = router;
