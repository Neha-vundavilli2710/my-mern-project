const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.json({

        success: true,

        message: "Get Profile"

    });

});

router.post("/", (req, res) => {

    res.json({

        success: true,

        message: "Save Profile"

    });

});

router.put("/", (req, res) => {

    res.json({

        success: true,

        message: "Update Profile"

    });

});

module.exports = router;