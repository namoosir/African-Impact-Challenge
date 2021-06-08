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
const { useReducer } = require('react');
const { useRouteMatch } = require('react-router');

const saltRounds = 10;

router.post("/register", async(req, res) => {

    const user= await User.findOne({email: req.body.email, username: req.body.username})
    if(user) {
        return res.status(400).json({user: "user already exists"});
    } else {
        if(req.body.typeOfUser === 'entrepreneur') {
            const tUser = new Entrepreneur({});
        } else if(req.body.typeOfUser === 'partner') {
            const tUser = new Partner({});
        } else if(req.body.typeOfUser === 'company') {
            const tUser = new Company({});
        } else if(req.body.typeOfUser === 'instructor') {
            const tUser = new Instructor({});
        }
        const newUser = new User({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            typeOfUser: req.body.typeOfUser,
        });
    }

    // bcrypt.genSalt(saltRounds, (err, salt) => {
    //     bcrypt.hash(typeUser.password, salt, async(err, hash => {
    //         if(err) {
    //             throw err;
    //         } else {
    //             tUser.password = hash;
    //             tUser
    //                 .save()
    //                 .then(ent => res.json(ent))
    //                 .catch(err => console.log(err));
    //         }
    //     }))
    // });

    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash => {
            if(err) {
                throw err;
            } else {
                newUser.password = hash;
                newUser
                    .save()
                    .then(ent => res.json(ent))
                    .catch(err => console.log(err));
            }
        }))
    });
})

router.post('/login', async(req, res) => {

    const {email, username} = req.body;

    const user = await User.findOne({email, username})
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