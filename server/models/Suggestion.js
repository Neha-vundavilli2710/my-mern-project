const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    height: {
      type: Number,
      required: true,
    },

    weight: {
      type: Number,
      required: true,
    },

    activityLevel: {
      type: String,
      required: true,
    },

    bmi: {
      type: Number,
      required: true,
    },

    bmiCategory: {
      type: String,
      required: true,
    },

    calories: {
      type: Number,
      required: true,
    },

    protein: {
      type: Number,
      required: true,
    },

    carbs: {
      type: Number,
      required: true,
    },

    fats: {
      type: Number,
      required: true,
    },

    waterIntake: {
      type: Number,
      required: true,
    },

    mealPlan: [
      {
        meal: String,
        food: String,
      },
    ],

    recommendation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Suggestion", suggestionSchema);