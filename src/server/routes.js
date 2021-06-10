const express = require('express');
const userController = require('./controllers/users');

const router = express.Router();

router.get('/:id', userController.user_details);
router.put('/:id/edit', userController.update_details)

module.exports = router;