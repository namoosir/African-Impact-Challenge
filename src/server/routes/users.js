require('dotenv').config();

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const User = require('../models/user')
const Ent = require('../models/entrepreneur');
const Instructor = require('../models/instructor');
const Partner = require('../models/partner');
const Company = require('../models/company');

const {registerUser, loginUser1, loginUser2} = require('../controllers/userControllers')

const saltRounds = 10;
let id = 0;

router.post("/register", registerUser)

router.post('/login', loginUser1)

router.post('/profile/:id/auth/settings', loginUser2)

module.exports = router;
  