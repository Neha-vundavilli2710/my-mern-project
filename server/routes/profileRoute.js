const express = require("express");

const router = express.Router();

const {
  getProfile,
  saveProfile,
  updateProfile,
} = require("../controllers/profileController");

const authMiddleware = require("../middlewares/authMiddleware");

/* ===========================
   PROFILE ROUTES
=========================== */

router.get(
  "/",
  authMiddleware,
  getProfile
);

router.post(
  "/",
  authMiddleware,
  saveProfile
);

router.put(
  "/",
  authMiddleware,
  updateProfile
);

module.exports = router;