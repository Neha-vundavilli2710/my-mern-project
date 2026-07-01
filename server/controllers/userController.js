const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ==============================
// Register User
// ==============================
const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      age,
      gender,
      height,
      weight,
      activityLevel,
    } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      age,
      gender,
      height,
      weight,
      activityLevel,
    });

    const userResponse = {
  _id: user._id,
  fullName: user.fullName,
  email: user.email,
  age: user.age,
  gender: user.gender,
  height: user.height,
  weight: user.weight,
  activityLevel: user.activityLevel,
  role: user.role,
};

res.status(201).json({
  success: true,
  message: "Registration Successful",
  user: userResponse,
});

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==============================
// Login User
// ==============================
const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });

    if (!user) {

      return res.status(404).json({
        message: "User not found",
      });

    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid Password",
      });

    }

    // Generate JWT
    const token = jwt.sign(

      {
        id: user._id,
        role: user.role,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }

    );

    const userResponse = {
  _id: user._id,
  fullName: user.fullName,
  email: user.email,
  age: user.age,
  gender: user.gender,
  height: user.height,
  weight: user.weight,
  activityLevel: user.activityLevel,
  role: user.role,
};

res.status(200).json({
  success: true,
  message: "Login Successful",
  token,
  user: userResponse,
});

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};

module.exports = {

  registerUser,

  loginUser,

};