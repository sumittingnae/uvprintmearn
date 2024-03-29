const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();
const app = express();
// Connect to the database
connectDB();
app.use(cors());




// Set up CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://uvprintmearn.onrender.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Set up middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Define routes
app.use("/api", require("./routes/Contact"));
app.use("/api", require("./routes/contactget"));
app.use("/api", require("./routes/Product"));
app.use("/api", require("./routes/Productget"));
app.use("/api", require("./routes/QuantityPost"));
app.use("/api", require("./routes/productdetails"));
app.use("/api", require("./routes/messagedelete"));
app.use("/api", require("./routes/signup"));
app.use("/api", require("./routes/loginroutes"));
app.use("/api", require("./routes/getOrder"));
app.use("/api", require("./routes/ordercount"));
app.use("/api", require("./routes/count"));
app.use("/api", require("./routes/Messagecount"));
app.use("/api", require("./routes/countProduct"));
// 


const port = process.env.PORT || 8080; // Setting default port to 8080 if PORT is not provided in .env

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
