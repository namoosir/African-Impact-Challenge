require('dotenv').config();

const express = require('express');
const router = express.Router();

const {registerUser} = require('../controllers/register')
const {loginUser1} = require('../controllers/login')


router.post("/register", registerUser)

router.post('/login', loginUser1)


module.exports = router;
  