const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

const {
  createSuggestion,
  getSuggestions,
  deleteSuggestion,
} = require("../controllers/suggestionController");

// Create Nutrition Suggestion
router.post("/", authMiddleware, createSuggestion);

// Get Logged In User Suggestions
router.get("/", authMiddleware, getSuggestions);

// Delete Suggestion
router.delete("/:id", authMiddleware, deleteSuggestion);

module.exports = router;