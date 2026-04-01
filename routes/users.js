const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');

router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.get('/:id/edit', userController.getEditUser);

module.exports = router;