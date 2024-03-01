const express = require("express");
const router = express.Router();
const fetchDatas =require ("express-param")

const app = express();
app.use(fetchDatas());

const Product = require("../models/productupload"); // Adjust the import path if necessary


router.get("/products/:id", async (req, res) => {
  try {
    //console.log("Product ID:", req.params.id); // Corrected parameter name
    // const id = req.params._id;
    const product = await Product.findById(req.params.id).exec() // Corrected parameter name
   // Corrected parameter name
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
