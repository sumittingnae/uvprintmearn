const mongoose = require("mongoose");

// Define the schema for the Contact model
const contactSchema = new mongoose.Schema({
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
  address: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }

});

// Create the Contact model from the schema
const Contact = mongoose.model("contacts", contactSchema);

module.exports = Contact;
