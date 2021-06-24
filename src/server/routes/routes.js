require('dotenv').config();

const userController = require('../controllers/profile');

const express = require('express');
const router = express.Router();

const {registerUser} = require('../controllers/register')
const {loginUser1} = require('../controllers/login')
const {loginUser2, updateUser} = require('../controllers/setting')

router.get('/profile/getUsers', userController.get_all_profiles);

router.get('/profile/:id', userController.user_details);

router.post("/register", registerUser)

router.post('/login', loginUser1)

router.post('/profile/auth', loginUser2)

router.put('/profile/update/settings', updateUser)

module.exports = router;
  