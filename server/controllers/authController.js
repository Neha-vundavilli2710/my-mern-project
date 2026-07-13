const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

/* ===========================
    REGISTER
=========================== */

exports.register = async (req, res) => {

    try {

        const {

            fullName,

            email,

            password,

        } = req.body;

        const existingUser = await User.findOne({

            email,

        });

        if (existingUser) {

            return res.status(400).json({

                success: false,

                message: "Email already exists",

            });

        }

        const hashedPassword = await bcrypt.hash(

            password,

            10

        );

        const user = await User.create({

            fullName,

            email,

            password: hashedPassword,

        });

        res.status(201).json({

            success: true,

            message: "Registration Successful",

            user: {

                id: user._id,

                fullName: user.fullName,

                email: user.email,

            },

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
        LOGIN
=========================== */

exports.login = async (req, res) => {

    try {

        const {

            email,

            password,

        } = req.body;

        const user = await User.findOne({

            email,

        });

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found",

            });

        }

        const isMatch = await bcrypt.compare(

            password,

            user.password

        );

        if (!isMatch) {

            return res.status(400).json({

                success: false,

                message: "Invalid Password",

            });

        }

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

        res.json({

            success: true,

            message: "Login Successful",

            token,

            user: {

                id: user._id,

                fullName: user.fullName,

                email: user.email,

                role: user.role,

            },

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};