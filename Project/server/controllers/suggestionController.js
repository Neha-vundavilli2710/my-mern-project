const Suggestion = require("../models/Suggestion");
const Profile = require("../models/Profile");
const BMI = require("../models/BMI");

function calculateBMR(gender, weight, height, age) {
  if (gender === "Male") return 10 * weight + 6.25 * height - 5 * age + 5;
  if (gender === "Female") return 10 * weight + 6.25 * height - 5 * age - 161;
  const male = 10 * weight + 6.25 * height - 5 * age + 5;
  const female = 10 * weight + 6.25 * height - 5 * age - 161;
  return (male + female) / 2; // "Other" — average of both formulas
}

function buildPlan(category) {
  switch (category) {
    case "Underweight":
      return {
        calorieAdjustment: 300,
        proteinFactor: [1.4, 1.6],
        walk: "2-3 km per day",
        timing: "3 meals and 3 snacks",
        suggestion: "Increase calorie intake with nutrient-dense foods to support healthy weight gain.",
      };
    case "Overweight":
      return {
        calorieAdjustment: -300,
        proteinFactor: [1.4, 1.6],
        walk: "5-6 km per day",
        timing: "3 meals and 1 snack",
        suggestion: "Moderate calorie deficit with higher protein to support fat loss while preserving muscle.",
      };
    case "Obese":
      return {
        calorieAdjustment: -500,
        proteinFactor: [1.5, 1.8],
        walk: "6-8 km per day",
        timing: "3 structured meals, avoid snacking",
        suggestion: "Focus on a sustainable calorie deficit, high protein, and consistent daily walking.",
      };
    default: // Normal Weight
      return {
        calorieAdjustment: 0,
        proteinFactor: [1.2, 1.4],
        walk: "3-4 km per day",
        timing: "3 meals and 2 snacks",
        suggestion: "Maintain your current balanced diet and stay active.",
      };
  }
}

// Activity level defaults to "lightly active" (1.375) since the Profile
// model does not currently capture an activity-level field.
const ACTIVITY_MULTIPLIER = 1.375;

exports.generateSuggestion = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user.id });
    const latestBMI = await BMI.findOne({ userId: req.user.id }).sort({ createdAt: -1 });

    if (!profile || !latestBMI) {
      return res.status(400).json({
        success: false,
        message: "Please complete your profile and BMI check first.",
      });
    }

    const { age, height, weight, gender } = profile;
    const bmr = calculateBMR(gender, weight, height, age);
    const tdee = bmr * ACTIVITY_MULTIPLIER;

    const plan = buildPlan(latestBMI.category);
    const calorieIntake = Math.round(tdee + plan.calorieAdjustment);
    const proteinNeeds = `${Math.round(plan.proteinFactor[0] * weight)}-${Math.round(plan.proteinFactor[1] * weight)}g`;
    const carbLow = Math.round((calorieIntake * 0.45) / 4);
    const carbHigh = Math.round((calorieIntake * 0.55) / 4);

    const newSuggestion = await Suggestion.create({
      userId: req.user.id,
      age, height, weight,
      bmi: latestBMI.bmi,
      category: latestBMI.category,
      calorieIntake,
      proteinNeeds,
      carbohydrateNeeds: `${carbLow}-${carbHigh}g`,
      timing: plan.timing,
      walk: plan.walk,
      suggestion: plan.suggestion,
    });

    res.status(201).json({ success: true, suggestion: newSuggestion });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getLatestSuggestion = async (req, res) => {
  try {
    const suggestion = await Suggestion.findOne({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json({ success: true, suggestion });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Used by the Admin Dashboard in Step 2
exports.getAllSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggestion.find().populate("userId", "email").sort({ createdAt: -1 });
    res.json({ success: true, suggestions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.deleteSuggestion = async (req, res) => {
  try {
    const deleted = await Suggestion.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Suggestion not found." });
    }
    res.json({ success: true, message: "Suggestion deleted." });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};