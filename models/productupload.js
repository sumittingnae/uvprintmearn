const mongoose = require("mongoose");

// Define the schema for the Product model
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    required: true,
  },
});

// Define a virtual property to generate the image path
productSchema.virtual("imagePath").get(function () {
  return `/backend/uploads/${this._id}`;
});

// Create the Product model from the schema
const Product = mongoose.model("products", productSchema);

module.exports = Product;
