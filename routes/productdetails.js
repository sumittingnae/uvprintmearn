const express = require("express");
const router = express.Router();
const fetchDatas =require ("express-param")

const app = express();
app.use(fetchDatas());

const Product = require("../models/productupload"); // Adjust the import path if necessary


router.get("/products/:id", async (req, res) => {
  try {
   const productId=req.params.id;
   const product = await Product.findById(productId);
   res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
