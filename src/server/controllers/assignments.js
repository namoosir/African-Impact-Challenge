const Entrepreneur = require("../models/entrepreneur");
const Instructor = require("../models/instructor");
const Partner = require("../models/partner");
const Company = require("../models/company");
const User = require("../models/user");
const Modules = require("../models/modules");
const Assignments = require("../models/assignments");

const fs = require("fs");

const imagesPath = "./server/images";

const documentPath = "./server/documents";

const userType = {
  Entrepreneur: Entrepreneur,
  Instructor: Instructor,
  Partner: Partner,
  Company: Company,
};

const { expect } = require("chai");

const create_assignment = async (req, res) => {
  const assignment = new Assignments({
    userid: req.body.userid,
    name: req.body.name,
    moduleId: req.body.moduleId,
  });
  const refassignment = await assignment.save();
  res.status(200).json(refassignment);
};

const get_assignment_model = (req, res) => {
  Assignments.find({ userid: req.params.id }).then((result) => {
    res.status(200).json(result);
  });
};

const edit_assignment = (req, res) => {
  console.log("IN EDIT ASSIGNMENTS", req.body);
 
  if(req.body.submitted_document) {
    req.body.submitted_document = "";
  } else if(req.body.marked_document) {
    req.body.marked_document = ""
  }
  

  Assignments.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((result) => {
    res.status(200).json(result);
  });
};

const save_submitted_document = (req, res) => {
  // expect(req.files.SubmittedDocument, "file needed").to.exist;
  if (typeof req.files.SubmittedDocument !== "undefined") {
    const expensesFile = req.files.SubmittedDocument[0];
    const filePath = expensesFile.path.split("/");
    const extenstion = expensesFile.originalname.split(".");
    const fileName =
      extenstion.slice(0, -1).join("") +
      "*" +
      filePath[filePath.length - 1] +
      "." +
      extenstion[extenstion.length - 1];

    Assignments.findByIdAndUpdate(req.params.id, {
      submitted_document: fileName,
    }).then((result) =>
      fs.rename(
        `./server/documents/${filePath[filePath.length - 1]}`,
        `./server/documents/${fileName}`,
        () => {
          res.status(200).json(fileName);
        }
      )
    );
  } else {
    res.status(200);
  }
};

const save_marked_document = (req, res) => {
  if (typeof req.files.MarkedDocument !== "undefined") {
    const expensesFile = req.files.MarkedDocument[0];
    const filePath = expensesFile.path.split("/");
    const extenstion = expensesFile.originalname.split(".");
    const fileName =
      extenstion.slice(0, -1).join("") +
      "*" +
      filePath[filePath.length - 1] +
      "." +
      extenstion[extenstion.length - 1];

    Assignments.findByIdAndUpdate(req.params.id, {
      marked_document: fileName,
    }).then((result) =>
      fs.rename(
        `./server/documents/${filePath[filePath.length - 1]}`,
        `./server/documents/${fileName}`,
        () => {
          res.status(200).json(fileName);
        }
      )
    );
  } else {
    res.status(200);
  }
};

const get_all_entrepreneurs = async (req, res) => {
  const entrepreneurs = await User.find({ typeOfUser: "Entrepreneur" });
  res.status(200).json(entrepreneurs);
};

const get_assignment_id_name = async (req, res) => {
  const assignment = await Assignments.find({
    userid: req.params.id,
    name: req.params.name,
  });
  if (assignment) {
    res.status(200).json(assignment.submitted_document);
  } else {
    res.status(404);
  }
};

const get_all_assignments = async (req, res) => {
  const assignments = await Assignments.find({ userid: req.params.id });
  res.status(200).json(assignments);
};

const get_all_assignments_instructor = async (req, res) => {
  const assignments = await Assignments.find({ moduleId: req.params.id });
  let populatedAssignments = [];

  for (const assignment of assignments) {
    const populated = await myPop(assignment, "userid").then(function (result) {
      return result;
    });

    const populated2 = await myPop(assignment, "moduleId").then(function (res) {
      return res;
    });

    populatedAssignments.push(populated2);
  }

  res.status(200).json(populatedAssignments);
};

async function myPop(module, field) {
  let itemPopulated = await module.populate(field).execPopulate();
  return itemPopulated;
}

module.exports = {
  create_assignment,
  get_assignment_model,
  edit_assignment,
  save_submitted_document,
  save_marked_document,
  get_all_entrepreneurs,
  get_assignment_id_name,
  get_all_assignments,
  get_all_assignments_instructor,
};
