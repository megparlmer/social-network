const db = require('../models/index');

console.log({ db });

const thoughtController = {
    getThoughtById: async function(req, res) {
        try {
            const thought = await db.Thought.findById(req.params.id);
            res.status(200).json({ thought });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getThoughts: async function (req, res) {
        try {
            const thoughts = await db.Thoughts.find();
            res.status(200).json({ thoughts });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    createThought: async function (req, res) {
        try {
            const newThought = db.Thought.createOne(req.body);
            res.status(200).json({ thought:newThought });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    updateThought: async function (req, res) {
        try {
            const updatedThought = await db.Thought.findOneAndUpdate({});
            res.status(200).json({ thought: updatedThought });
        } catch(error) {
            res.status(500).json({ error: error.message });
        }
    },
    deleteThought: async function (req, res) {
        try {
            const deletedThought = await db.Thought.findOneAndDelete({});
            res.status(200).json({ thought: deletedThought });
        } catch(error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = thoughtController;