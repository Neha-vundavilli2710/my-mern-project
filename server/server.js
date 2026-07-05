const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./db/config");

const authRoutes = require("./routes/authRoute");
const profileRoutes = require("./routes/profileRoute");
const bmiRoutes = require("./routes/bmiRoute");
const mealRoutes = require("./routes/mealRoute");
const historyRoutes = require("./routes/historyRoute");

const app = express();

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/profile", profileRoutes);

app.use("/api/bmi", bmiRoutes);

app.use("/api/meals", mealRoutes);

app.use("/api/history", historyRoutes);

app.get("/", (req, res) => {

    res.json({

        success: true,

        message: "Nutrition Assistant Backend Running"

    });

});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});