const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/adminMiddleware");
const {
  generateSuggestion,
  getLatestSuggestion,
  getAllSuggestions,
  deleteSuggestion,
} = require("../controllers/suggestionController");

router.post("/", auth, generateSuggestion);
router.get("/", auth, getLatestSuggestion);
router.get("/all", auth, isAdmin, getAllSuggestions);
router.delete("/:id", auth, isAdmin, deleteSuggestion);

module.exports = router;