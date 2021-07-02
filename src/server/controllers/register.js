require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Ent = require("../models/entrepreneur");
const Instructor = require("../models/instructor");
const Partner = require("../models/partner");
const Company = require("../models/company");

const saltRounds = 10;
let id = 0;

module.exports.registerUser = async (req, res) => {
  let savedUser;
  let refUser = 0;
  const user = await User.findOne({
    email: req.body.email,
    username: req.body.username,
  });
  if (user) {
    res.status(400).json({
      user: "user already exists",
      success: false,
      redirectUrl: "/register",
    });
    res.redirect("/register");
  }

  if (req.body.typeOfUser === "Entrepreneur") {
    const ent = new Ent({});
    refUser = await ent.save();
  } else if (req.body.typeOfUser === "Partner") {
    const partner = new Partner({});
    refUser = await partner.save();
  } else if (req.body.typeOfUser === "Company") {
    const company = new Company({});
    refUser = await company.save();
  } else {
    const instructor = new Instructor({});
    refUser = await instructor.save();
  }


  const newUser = new User({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    typeOfUser: req.body.typeOfUser,
    typeUser: refUser._id,
  });

  bcrypt.genSalt(saltRounds, async (err, salt) => {
    bcrypt.hash(newUser.password, salt, async (err, hash) => {
      if (err) {
        throw err;
      } else {
        newUser.password = hash;
      }
    });
  });

  savedUser = await newUser.save();

  const sentUser = {
    id: savedUser._id,
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    typeOfUser: req.body.typeOfUser,
    typeUser: refUser._id
  };

  const payload = {
    username: sentUser.username
  };

  jwt.sign(
    payload,
    process.env.secretOrKey,
    {
      expiresIn: 360000,
    },
    (err, token) => {
      if (err) throw err;
      console.log(token);
      res.status(200).json({ token, sentUser });
    }
  );
};


