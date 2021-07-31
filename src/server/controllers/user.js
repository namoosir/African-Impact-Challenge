require("dotenv").config();

const User = require("../models/user");

async function myPop(module, field) {
  let itemPopulated = await module.populate(field).execPopulate();
  return itemPopulated;
}

module.exports.updateCurrentUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);

  if (!user) {
    res.status(404).json({ user: "USER NOT FOUND!" });
  } else {
    myPop(user, "events").then(function (result) {
      const sentUser = {
        id: user._id,
        username: user.username,
        name: user.name,
        email: user.email,
        events: result.events, 
        typeOfUser: user.typeOfUser,
        typeUser: user.typeUser,
      };

      console.log("In user.js", sentUser)

      res.status(200).json({sentUser});
    })
  }
};
