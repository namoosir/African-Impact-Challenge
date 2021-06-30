require('dotenv').config();
const multer  = require('multer')
const uploadDocument = multer({ dest: 'server/documents/' })
const uploadImage = multer({ dest: 'server/images/' })


const userController = require('../controllers/profile');

const express = require('express');
const router = express.Router();

const {registerUser} = require('../controllers/register')
const {loginUser1} = require('../controllers/login')
const {loginUser2, updateUser} = require('../controllers/setting')

router.get('/profile/getImage/:id', userController.get_image)

router.get('/profile/getDocument/:name', userController.get_document)

router.get('/profile/:id', userController.user_details);

router.post("/register", registerUser)

router.post('/login', loginUser1)

router.post('/profile/auth', loginUser2)

router.put('/profile/update/settings', updateUser)

router.put('/profile/edit/:id', userController.user_updates)

router.post('/profile/editImage/:id',
	uploadImage.fields([
		{ name: 'imageURL', maxCount: 1 },
	]),
    userController.save_image
);

router.post('/profile/addDocuments/:id',
	uploadDocument.fields([
		{ name: 'documents' },
	]),
    userController.save_documents
);

module.exports = router;
  