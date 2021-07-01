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

module.exports.loginUser2 = async (req, res) => {
  console.log(req.body);


  const { email, password } = req.body;

  const userCheck = await User.findOne({ email });
  if (!userCheck) {
    return res.status(404).json({ user: "user does not exist" });
  }

  const passwordCheck = await bcrypt.compare(password, userCheck.password);
  userCheck.password = password;
  if (passwordCheck) {
    const payload = {
      id: userCheck._id,
      username: userCheck.username,
    };
    jsonwebtoken.sign(
      payload,
      process.env.secret,
      {
        expiresIn: 604800,
      },
      (err, token) => {
        const user = {
          id: userCheck.id,
          email: userCheck.email,
          username: userCheck.username,
          name: userCheck.name,
          typeOfUser: userCheck.typeOfUser,
          typeUser: userCheck.typeUser,
        };
        console.log(user);
        res.json({
          token: "Bearer " + token,
          user,
        });
      }
    );
  } else {
    res.send(400).json({ password: "incorrect password" });
  }
};

module.exports.updateUser = async (req, res) => {
  const { id, email, name, username, typeUser, typeOfUser } = req.body;
  console.log("req.body: " + id);

  const updateUser = await User.findById(id);
  if (!updateUser) {
    return res.status(404).json({ msg: "user not found" });
  }

  updateUser.name = req.body.name;
  updateUser.username = req.body.username;
  updateUser.email = req.body.email;

  await updateUser.save();
  const user = { id, email, name, username, typeUser, typeOfUser };
  console.log('here backend');
  res.status(200).json({ user });
};
