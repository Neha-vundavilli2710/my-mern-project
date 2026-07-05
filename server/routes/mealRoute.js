const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

const {

    getMealPlan,

    saveMealPlan,

    deleteMealPlan,

} = require("../controllers/mealController");

router.get(

    "/",

    authMiddleware,

    getMealPlan

);

router.post(

    "/",

    authMiddleware,

    saveMealPlan

);

router.put(

    "/",

    authMiddleware,

    saveMealPlan

);

router.delete(

    "/",

    authMiddleware,

    deleteMealPlan

);

module.exports = router;