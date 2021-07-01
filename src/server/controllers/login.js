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

module.exports.loginUser1 = async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ user: "user does not exist" });
    }
  
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (passwordCheck) {

      const sentUser = {
        id: user._id,
        email: user.email,
        username: user.username,
        name: user.name,
        typeOfUser: user.typeOfUser,
        typeUser: user.typeUser
      };

      const payload = {
        username: user.username,
      };
      jwt.sign(
        payload,
        process.env.secretOrKey,
        {
          expiresIn: 604800,
        },
        (err, token) => {
          res.status(200).json({
            sentUser,
            token
          });
        }
      );
    } else {
      res.send(400).json({ password: "incorrect password" });
    }
  };