const BMI = require("../models/BMI");
const MealPlan = require("../models/MealPlan");

exports.getHistory = async (req, res) => {

    try {

        const bmiHistory = await BMI.find({

            userId: req.user.id,

        }).sort({

            createdAt: -1,

        });

        const mealHistory = await MealPlan.findOne({

            userId: req.user.id,

        });

        res.json({

            success: true,

            bmiHistory,

            mealHistory,

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};