const Entrepreneur = require("../models/entrepreneur");
const Instructor = require("../models/instructor");
const Partner = require("../models/partner");
const Company = require("../models/company");
const User = require("../models/user");
const Modules = require("../models/modules");

const imagesPath = "./server/images";

const documentPath = "./server/documents";

const userType = {
  Entrepreneur: Entrepreneur,
  Instructor: Instructor,
  Partner: Partner,
  Company: Company,
};

const { expect } = require("chai");

const create_module = async (req, res) => {
  const module = new Modules({
    name: req.body.name,
    user: req.params.id,
    assignments: [],
    content: [],
  });

  const refModule = await module.save();

  res.status(200).json(refModule);
};

const get_recent_modules = async (req, res) => {
  const modules = await Modules.find({}).sort("-date");
  const result = modules.slice(0, 10);
  var ans = [];

  for (const module of result) {
    var populated = await myPop(module, "user").then(function (result) {
      return result;
    });

    ans.push(populated);
  }

  const sentModules = ans;

  res.status(200).json(sentModules);
};

async function myPop(module, field) {
  let itemPopulated = await module.populate(field).execPopulate();
  return itemPopulated;
}

const delete_module = async (req, res) => {
  moduleid = req.body.id;
  await Modules.deleteOne({ _id: moduleid });
};

const get_assignment = (req, res) => {
  const name = req.params.name;
  res.sendFile(name, { root: documentPath });
};

const save_assignments = (req, res) => {
  var fileNames = [];
  var expensesFile = [];
  var filePath = [];
  var fileName;

  if (typeof req.files.assignments !== "undefined") {
    for (let i = 0; i < req.files.assignments.length; i++) {
      filePath = req.files.assignments[i].path.split("/");
      fileName = filePath[filePath.length - 1];
      fileNames.push(fileName);
    }

    var documentsList = [];
    const id = req.params.id;

    Modules.findById(id).then((result) => {
      documentsList = result.assignments;
      documentsList = documentsList.concat(fileNames);
      Modules.findByIdAndUpdate(id, { assignments: documentsList }).then((x) =>
        res.sendStatus(200)
      );
    });
  } else {
    res.sendStatus(200);
  }
};

const get_content = (req, res) => {
  const name = req.params.name;
  res.sendFile(name, { root: documentPath });
};

const save_content = (req, res) => {
  var fileNames = [];
  var expensesFile = [];
  var filePath = [];
  var fileName;

  if (typeof req.files.content !== "undefined") {
    for (let i = 0; i < req.files.content.length; i++) {
      filePath = req.files.content[i].path.split("/");
      fileName = filePath[filePath.length - 1];
      fileNames.push(fileName);
    }

    var documentsList = [];
    const id = req.params.id;

    Modules.findById(id).then((result) => {
      documentsList = result.content;
      documentsList = documentsList.concat(fileNames);
      Modules.findByIdAndUpdate(id, { content: documentsList }).then((x) =>
        res.sendStatus(200)
      );
    });
  } else {
    res.sendStatus(200);
  }
};

const get_exact_module = (req, res) => {
  Modules.findById(req.params.id).then((result) => {
    myPop(result, "user").then((result2) => {
      console.log("HEREEEEE", result2);
      res.status(200).json(result2);
    });
  });

  // if (!befModule) {
  //   res.status(404).json({ msg: "could not find module" });
  // }

  // const module = await myPop(befModule, "user");

  // res.status(200).json({ module });
};

module.exports = {
  create_module,
  get_recent_modules,
  delete_module,
  get_assignment,
  save_assignments,
  get_content,
  save_content,
  get_exact_module,
};
