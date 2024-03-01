const express = require("express");
const router = express.Router();
const Product = require("../models/productupload"); // Adjust the import path if necessary
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Define the destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname)); // Define the filename
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"]; // Add correct file types here
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Example of a POST route to create a new product
router.post("/products", upload.single("image"), async (req, res) => {
  try {
    // Create a new product object with data from the request body
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description,
      image: req.file.filenamev , // Save the path of the uploaded image
    });
    // Save the product to the database
    await product.save();
    res.send("Product created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
