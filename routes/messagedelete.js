const express = require("express");
const router = express.Router();
//const { ObjectId } = require("mongodb");

const Contact = require("../models/Contactmodels"); // Adjust the import path if necessary

// Set up route for deleting a contact
router.delete("/contacts/_id", async (req, res) => {
  try {
    const contactId = req.params._id;

    // Find contact by ID and delete it
    const deletedContact = await Contact.findOneAndDelete(contactId);

    // Check if the contact was found and deleted successfully
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    // If the contact was deleted successfully, send a success message
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error deleting contact:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
