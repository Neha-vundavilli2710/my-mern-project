const MealPlan = require("../models/MealPlan");

/* ===========================
   GET MEAL PLAN
=========================== */

exports.getMealPlan = async (req, res) => {

    try {

        let mealPlan = await MealPlan.findOne({

            userId: req.user.id,

        });

        if (!mealPlan) {

            mealPlan = {

                Monday: {},

                Tuesday: {},

                Wednesday: {},

                Thursday: {},

                Friday: {},

                Saturday: {},

                Sunday: {},

            };

        }

        res.json({

            success: true,

            mealPlan,

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};

/* ===========================
   SAVE / UPDATE MEAL PLAN
=========================== */

exports.saveMealPlan = async (req, res) => {

    try {

        const mealPlan = await MealPlan.findOneAndUpdate(

            {

                userId: req.user.id,

            },

            {

                userId: req.user.id,

                ...req.body,

            },

            {

                new: true,

                upsert: true,

            }

        );

        res.json({

            success: true,

            message: "Meal Plan Saved Successfully",

            mealPlan,

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};

/* ===========================
   DELETE MEAL PLAN
=========================== */

exports.deleteMealPlan = async (req, res) => {

    try {

        await MealPlan.findOneAndDelete({

            userId: req.user.id,

        });

        res.json({

            success: true,

            message: "Meal Plan Deleted Successfully",

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};