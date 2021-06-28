require('dotenv').config();

const userController = require('../controllers/profile');

const express = require('express');
const router = express.Router();

const {registerUser} = require('../controllers/register')
const {loginUser1} = require('../controllers/login')
const {loginUser2, updateUser} = require('../controllers/setting')

router.get('/profile/getimage/:id', userController.get_image)

router.get('/profile/:id', userController.user_details);

router.post("/register", registerUser)

router.post('/login', loginUser1)

router.post('/profile/auth', loginUser2)

router.put('/profile/update/settings', updateUser)

router.put('profile/edit/:id', userController.user_updates)



module.exports = router;
  