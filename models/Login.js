const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
date:{
    type:Date,
    default:Date.now

}
 
});



// Create the Product model from the schema
const SignIn = mongoose.model("signIn", loginSchema);

module.exports = SignIn;
