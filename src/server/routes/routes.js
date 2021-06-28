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

app.get('/add', (req, res) => {

    const ins = new Instructor({
      classes: ['Money101', 'Dropping204'],
      image: 'Coolguy.png',
      biography: 'My name is coolguy and I have a lot of money'
    })
  
    const user = new User({
      name: 'Muta Khs',
      username: 'Kharsm',
      email: 'mutase@lhars',
      password: 'hi123',
      typeOfUser: 'Instructor',
      typeUser: ins._id
    })
  
    ins.save()
    .then(result => {
      user.save()
      .then(result => {

module.exports = router;
  