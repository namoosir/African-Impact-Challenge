const express = require('express');
const userController = require('./controllers/users');

const router = express.Router();

router.get('/:id', userController.user_details);

module.exports = router;