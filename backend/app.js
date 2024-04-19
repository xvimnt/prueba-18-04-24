require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db");

app.use(cors());
app.use(express.json());

// Load routes dynamically
app.use("/api/1.0", require("./app/routes"));

// Connect to mongo
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
