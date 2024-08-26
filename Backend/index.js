const express = require("express");
const mongoose = require("mongoose"); // Add this line
const cors = require("cors");
const connectDB = require("./db");

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username === "topperWorld@gmail.com" && password === "flipkartClone") {
    res.json({ message: "Login successful!" });
  } else {
    res.json({ message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
