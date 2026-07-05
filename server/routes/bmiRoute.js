const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

const {
  saveBMI,
  getLatestBMI,
  getBMIHistory,
} = require("../controllers/bmiController");

router.post("/", authMiddleware, saveBMI);

router.get("/", authMiddleware, getLatestBMI);

router.get("/history", authMiddleware, getBMIHistory);

module.exports = router;