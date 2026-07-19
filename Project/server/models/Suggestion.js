const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    age: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    bmi: { type: Number, required: true },
    category: { type: String, required: true },

    calorieIntake: { type: Number, required: true },
    proteinNeeds: { type: String, required: true },
    carbohydrateNeeds: { type: String, required: true },
    timing: { type: String, required: true },
    walk: { type: String, required: true },
    suggestion: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Suggestion", suggestionSchema);