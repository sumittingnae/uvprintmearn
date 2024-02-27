const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Set up CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Set up middleware for parsing JSON
app.use(express.json());

// Define routes
app.use("/api", require("./routes/Contact"));
app.use("/api", require("./routes/contactget"));
app.use("/api", require("./routes/Product"));
app.use("/api", require("./routes/Productget"));
app.use("/api", require("./routes/QuantityPost"));

const port = process.env.PORT || 8080; // Setting default port to 8080 if PORT is not provided in .env

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
