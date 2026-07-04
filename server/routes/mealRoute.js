const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.json({

        success: true,

        message: "Get Meal Plan"

    });

});

router.post("/", (req, res) => {

    res.json({

        success: true,

        message: "Save Meal Plan"

    });

});

router.put("/", (req, res) => {

    res.json({

        success: true,

        message: "Update Meal Plan"

    });

});

router.delete("/", (req, res) => {

    res.json({

        success: true,

        message: "Delete Meal Plan"

    });

});

module.exports = router;