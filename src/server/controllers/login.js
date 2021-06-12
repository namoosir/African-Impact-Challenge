require("dotenv").config();

const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

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
      const payload = {
        id: user._id,
        username: user.username,
      };
      jsonwebtoken.sign(
        payload,
        process.env.secret,
        {
          expiresIn: 604800,
        },
        (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token,
          });
        }
      );
    } else {
      res.send(400).json({ password: "incorrect password" });
    }
  };