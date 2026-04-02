const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameController');

router.post('/:userId/games', gameController.createGame);
router.get('/:userId/games', gameController.getGames)

module.exports = router;