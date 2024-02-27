const mongoose = require("mongoose");

// Define the schema for the Contact model
const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  contact: {
    type: String,
    required: true,
  },
  wptb: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

// Create the Contact model from the schema
const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
