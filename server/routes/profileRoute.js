const express = require("express");

const router = express.Router();

const {
  getProfile,
  saveProfile,
  updateProfile,
} = require("../controllers/profileController");

const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, (req, res, next) => {
  console.log("✅ GET /api/profile reached");
  next();
}, getProfile);

router.post("/", authMiddleware, saveProfile);

router.put("/", authMiddleware, updateProfile);

module.exports = router;