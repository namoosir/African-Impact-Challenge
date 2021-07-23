const Event = require("../models/event");
const Modules = require("../models/modules");

const create_event = (req, res) => {
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

module.exports = {
  create_event,
};
