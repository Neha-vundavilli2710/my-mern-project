const mongoose = require("mongoose");

const mealPlanSchema = new mongoose.Schema(

    {

        userId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true,

            unique: true,

        },

        Monday: {

            breakfast: String,

            lunch: String,

            dinner: String,

        },

        Tuesday: {

            breakfast: String,

            lunch: String,

            dinner: String,

        },

        Wednesday: {

            breakfast: String,

            lunch: String,

            dinner: String,

        },

        Thursday: {

            breakfast: String,

            lunch: String,

            dinner: String,

        },

        Friday: {

            breakfast: String,

            lunch: String,

            dinner: String,

        },

        Saturday: {

            breakfast: String,

            lunch: String,

            dinner: String,

        },

        Sunday: {

            breakfast: String,

            lunch: String,

            dinner: String,

        },

    },

    {

        timestamps: true,

    }

);

module.exports = mongoose.model("MealPlan", mealPlanSchema);