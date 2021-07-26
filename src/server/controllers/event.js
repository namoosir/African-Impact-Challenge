const Event = require("../models/event");
const Modules = require("../models/modules");
const User = require("../models/user")

const create_event_module = (req, res) => {
  const event = new Event({
    title: req.body.title,
    start: req.body.start,
    end: req.body.end,
  });
  const refEvent = event
    .save()
    .then((ref) => {
      const module = Modules.findById(req.body.moduleId)
        .then((result) => {
          result.events.push(ref._id);
          result.save();
        })
        .catch((e) => res.status(404).send("Module not found"));
    })
    .catch((e) => res.status(400).send("Could not save event"));

  res.status(200).send("Successfully added event!");
};

const create_event_company = (req, res) => {
  const event = new Event({
    title: req.body.title,
    start: req.body.start,
    end: req.body.end,
  });
  const refEvent = event
    .save()
    .then((ref) => {
      const user = User.findById(req.body.userId)
        .then((result) => {
          result.events.push(ref._id);
          result.save();
        })
        .catch((e) => res.status(404).send("User not found"));
    })
    .catch((e) => res.status(400).send("Could not save event"));
    
  res.status(200).send("Successfully added event!")
}

module.exports = {
  create_event_module,
  create_event_company,
};
