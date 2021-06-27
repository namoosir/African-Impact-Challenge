require('dotenv').config();

// const userController = require('../controllers/profile');
const postController = require('../controllers/posts')

const express = require('express');
const router = express.Router();

const {registerUser} = require('../controllers/register')
const {loginUser1} = require('../controllers/login')
const {loginUser2, updateUser} = require('../controllers/setting')

// router.get('/profile/:id', userController.user_details);
// router.put('/edit/:id', userController.user_updates)


router.post("/register", registerUser)

router.post('/login', loginUser1)

router.post('/profile/auth', loginUser2)

router.put('/profile/update/settings', updateUser)

router.put("/post", postController.create_post)
router.put("/comment", postController.add_comment)
router.get("/getrec", postController.get_recent_posts)
router.put("/editpost", postController.edit_post)
router.put("/deletepost", postController.remove_post)



module.exports = router;
  