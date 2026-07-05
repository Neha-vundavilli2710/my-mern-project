const Profile = require("../models/Profile");

/* ===========================
   GET PROFILE
=========================== */

exports.getProfile = async (req, res) => {

    try {

        let profile = await Profile.findOne({

            userId: req.user.id,

        });

        if (!profile) {

            profile = {

                age: "",

                gender: "",

                height: "",

                weight: "",

                goal: "",

                waterGoal: 3,

            };

        }

        res.json({

            success: true,

            profile,

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
   SAVE PROFILE
=========================== */

exports.saveProfile = async (req, res) => {

    try {

        const profile = await Profile.findOneAndUpdate(

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

                runValidators: true,

            }

        );

        res.json({

            success: true,

            message: "Profile saved successfully",

            profile,

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
   UPDATE PROFILE
=========================== */

exports.updateProfile = async (req, res) => {

    try {

        const profile = await Profile.findOneAndUpdate(

            {

                userId: req.user.id,

            },

            req.body,

            {

                new: true,

                runValidators: true,

            }

        );

        res.json({

            success: true,

            message: "Profile updated successfully",

            profile,

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};