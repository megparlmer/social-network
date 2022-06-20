const router = require('express').Router();
const {
    getThoughtById,
    getThoughts,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controller');
// /api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);
// /api/thoughts/:id
router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);
// /api/thoughts/:id/reactions
router.route('/:id/reactions')
    .post()
    .delete();

module.exports = router;