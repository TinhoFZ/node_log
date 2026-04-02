const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/:id/choice', userController.getChoice)
router.get('/:id/edit', userController.getEditUser);
router.put('/:id', userController.updateUser);

module.exports = router;