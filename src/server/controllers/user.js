require("dotenv").config();

const User = require("../models/user");

module.exports.updateCurrentUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);

  if (!user) {
    res.status(404).json({ user: "USER NOT FOUND!" });
  }

  const sentUser = {
    id: user._id,
    username: user.username,
    name: user.name,
    email: user.email,
    typeOfUser: user.typeOfUser,
    typeUser: user.typeUser,
  };

  res.status(200).json({sentUser});
};
