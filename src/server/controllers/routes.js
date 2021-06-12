const express = require('express');
const userController = require('./users');

const router = express.Router();

router.get('/:id', userController.user_details);
router.put('/edit/:id', userController.user_updates)

module.exports = router;