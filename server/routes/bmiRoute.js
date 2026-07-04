const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {

    res.json({

        success: true,

        message: "Save BMI"

    });

});

router.get("/", (req, res) => {

    res.json({

        success: true,

        message: "Get BMI"

    });

});

module.exports = router;