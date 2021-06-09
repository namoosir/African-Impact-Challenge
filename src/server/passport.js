require('dotenv').config();

const passportJWT = require('passport-jwt');
const mongoose = require('mongoose');

const Entrepreneur = require('./models/entrepreneur');
const Instructor = require('./models/instructor');
const Partner = require('./models/partner');
const Company = require('./models/company');
const passport = require('passport');

const opts = {
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.secretOrKey
};

const jwtfunction = () => {
    passport.use(
        new passportJWT.Strategy(opts, async(payload, done) => {
            const user = await User.findById(user.id);
            if(user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
    )
};

module.exports = jwtfunction;
