const BMI = require("../models/BMI");

/* ===========================
   SAVE BMI
=========================== */

exports.saveBMI = async (req, res) => {
  try {
    const { bmi, category } = req.body;

    const bmiRecord = await BMI.create({
      userId: req.user.id,
      bmi,
      category,
    });

    res.status(201).json({
      success: true,
      message: "BMI saved successfully",
      bmi: bmiRecord,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ===========================
   GET LATEST BMI
=========================== */

exports.getLatestBMI = async (req, res) => {
  try {
    const bmi = await BMI.findOne({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      bmi,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ===========================
   BMI HISTORY
=========================== */

exports.getBMIHistory = async (req, res) => {
  try {
    const history = await BMI.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      history,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};