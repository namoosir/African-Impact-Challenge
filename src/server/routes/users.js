require('dotenv').config();

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const User = require('../models/user')
const Entrepreneur = require('../models/entrepreneur');
const Instructor = require('../models/instructor');
const Partner = require('../models/partner');
const Company = require('../models/company');

const saltRounds = 10;
let id = 0;

router.post("/register", async(req, res) => {

    let refUser = 0;
    const user= await User.findOne({email: req.body.email, username: req.body.username})
    if(user) {
        return res.status(400).json({user: "user already exists"});
    }

    const {email} = req.body;

    const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        typeOfUser: req.body.typeOfUser,
    });
    
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) {
                throw err;
            } else {
                newUser.password = hash;
                newUser
                    .save()
                    .then(ent => res.json(ent))
                    .catch(err => console.log(err));
            }
        })
    });
})

router.post('/login', async(req, res) => {

    const {email, password} = req.body;

    const user = await User.findOne({email})
    if(!user) {
        return res.status(404).json({user: "user does not exist"})
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if(passwordCheck) {
        const payload = {
            id: user._id,
            username: user.username
        }
        jsonwebtoken.sign(
            payload, 
            process.env.secret,
            {
                expiresIn: 604800
            },
            (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            )
    }
    else {
        res.send(400).json({password: 'incorrect password'});
    }

    
})

module.exports = router;

// if(req.body.typeOfUser === 'entrepreneur') {
        //     const tUser = new Entrepreneur({});
        //     const id = tUser._id
        //     tUser
        //     .save()
        //     .then(ent => res.json(ent))
        //     .catch(err => console.log(err));
        // } else if(req.body.typeOfUser === 'partner') {
        //     const tUser = new Partner({});
        //     id = tUser._id
        //     tUser
        //     .save()
        //     .then(ent => res.json(ent))
        //     .catch(err => console.log(err));
        // } else if(req.body.typeOfUser === 'company') {
        //     const tUser = new Company({});
        //     id = tUser.id
        //     tUser
        //     .save()
        //     .then(ent => res.json(ent))
        //     .catch(err => console.log(err));
        // } else {
        //     const tUser = new Instructor({});
        //     id = tUser._id
        //     tUser
        //     .save()
        //     .then(ent => res.json(ent))
        //     .catch(err => console.log(err));
        // }


            // if(req.body.typeOfUser === 'entrepreneur') {
    //     const entrepreneur = new Entrepreneur({
    //         email: email,
    //     })
    //     await entrepreneur.save();
    //     refUser = Entrepreneur.findOne({email});
    //     console.log(refUser);
    // } else if(req.body.typeOfUser === 'partner') {
    //     const partner = new Partner({
    //         email: email
    //     })
    //     await partner.save()
    //     refUser = Partner.findOne({email});
    // } else if(req.body.typeOfUser === 'company') {
    //     const company = new Company({
    //         email: email
    //     })
    //     await company.save();
    //     refUser = Company.findOne({email});
    // } else{
    //     const instructor = new Instructor ({
    //         email: email
    //     })
    //     await instructor.save();
    //     refUser = Instructor.findOne({email});
    // }