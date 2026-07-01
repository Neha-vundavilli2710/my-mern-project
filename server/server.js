const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./db/config");
const userRoutes = require("./routes/userRoute");
const suggestionRoutes = require("./routes/suggestionRoute");

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/suggestions", suggestionRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Nutrition Assistant Backend Running...");
});

// Server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});