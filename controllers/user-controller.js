const db = require('../models/index');

const userController = {
    getUsers: async function (req, res) {
        try {
            const users = await db.User.find();
            res.status(200).json({ users });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getUserById: async function (req, res) {
        try {
            const user = await db.User.findById(req.params.id);
            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    createUser: async function (req, res) {
        try {
            const newUser = await db.User.createOne(req.body);
            res.status(200).json({ thought: newUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    updateUser: async function (req, res) {
        try {
            const updatedUser = await db.User.findOneAndUpdate({});
            res.status(200).json({ user: updatedUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deleteUser: async function (req, res) {
        try {
            const deletedUser = await db.User.findOneAndDelete({});
            res.status(200).json({ user: deletedUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = userController;