const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const app = express();
app.use(express.static(path.join(__dirname, '/public')));
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.listen(3000, () => console.log("Server started on http://localhost:3000"));
