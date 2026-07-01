const Suggestion = require("../models/Suggestion");
const suggestNutrition = require("../utils/suggestNutrition");

// ===============================
// Create Nutrition Suggestion
// ===============================

const createSuggestion = async (req, res) => {
  try {
    const {
      age,
      gender,
      height,
      weight,
      activityLevel,
    } = req.body;

    // Generate Nutrition Report
    const nutrition = suggestNutrition({
      age,
      gender,
      height,
      weight,
      activityLevel,
    });

    // Save to MongoDB
    const suggestion = await Suggestion.create({
      userId: req.user.id,

      age,
      gender,
      height,
      weight,
      activityLevel,

      bmi: nutrition.bmi,
      bmiCategory: nutrition.bmiCategory,

      calories: nutrition.calories,
      protein: nutrition.protein,
      carbs: nutrition.carbs,
      fats: nutrition.fats,

      waterIntake: nutrition.waterIntake,

      mealPlan: nutrition.mealPlan,

      recommendation: nutrition.recommendation,
    });

    res.status(201).json({
      success: true,
      message: "Nutrition Plan Generated Successfully",
      suggestion,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================
// Get Logged In User Suggestions
// ===============================

const getSuggestions = async (req, res) => {

  try {

    const suggestions = await Suggestion.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      suggestions,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ===============================
// Delete Suggestion
// ===============================

const deleteSuggestion = async (req, res) => {

  try {

    await Suggestion.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Suggestion Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {
  createSuggestion,
  getSuggestions,
  deleteSuggestion,
};