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
    name: req.body.name
  });
  const refassignment = await assignment.save();
  res.status(200).json(refassignment);
};

const get_assignment_model = (req, res) => {
    Assignments.findById(req.params.id).then(() => {
        res.status(200).json(result);
    });
};

const edit_assignment = (req, res) => {
    Modules.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    }).then((result) => {
      res.status(200).json(result);
    });
};

const save_submitted_document = (req, res) => {
    expect(req.files.SubmittedDocument, "file needed").to.exist;
    const expensesFile = req.files.SubmittedDocument[0]; 
    const filePath = expensesFile.path.split("/");
    const extenstion = expensesFile.originalname.split(".")
    const fileName =  extenstion.slice(0,-1).join("")+ "*"+filePath[filePath.length - 1]+ "." + extenstion[extenstion.length-1]
  
    User.findByIdAndUpdate(req.params.id, {
        submitted_document: fileName,
    }).then((result) => fs.rename(`./server/documents/${filePath[filePath.length - 1]}`, `./server/documents/${fileName}`, ()=>{res.sendStatus(200)}));
};

const save_marked_document = (req, res) => {
    expect(req.files.MarkedDocument, "file needed").to.exist;
    const expensesFile = req.files.MarkedDocument[0]; 
    const filePath = expensesFile.path.split("/");
    const extenstion = expensesFile.originalname.split(".")
    const fileName =  extenstion.slice(0,-1).join("")+ "*"+filePath[filePath.length - 1]+ "." + extenstion[extenstion.length-1]
  
    User.findByIdAndUpdate(req.params.id, {
        marked_document: fileName,
    }).then((result) => fs.rename(`./server/documents/${filePath[filePath.length - 1]}`, `./server/documents/${fileName}`, ()=>{res.sendStatus(200)}));
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
  var filePath = [];
  var fileName;
  var extenstion;

  if (typeof req.files.assignments !== "undefined") {
    for (let i = 0; i < req.files.assignments.length; i++) {
      filePath = req.files.assignments[i].path.split("/");
      extenstion = req.files.assignments[i].originalname.split(".");
      fileName =
        extenstion.slice(0, -1).join("") +
        "*" +
        filePath[filePath.length - 1] +
        "." +
        extenstion[extenstion.length - 1];
      fileNames.push(fileName);
    }

    var documentsList = [];
    const id = req.params.id;

    Modules.findById(id).then((result) => {
      documentsList = result.assignments;
      documentsList = documentsList.concat(fileNames);
      Modules.findByIdAndUpdate(id, { assignments: documentsList }).then((x) =>
        fs.rename(
          `./server/documents/${filePath[filePath.length - 1]}`,
          `./server/documents/${fileName}`,
          () => {
            res.sendStatus(200);
          }
        )
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
  var filePath = [];
  var fileName;
  var extenstion;

  if (typeof req.files.content !== "undefined") {
    for (let i = 0; i < req.files.content.length; i++) {
      filePath = req.files.content[i].path.split("/");
      extenstion = req.files.content[i].originalname.split(".");
      fileName =
        extenstion.slice(0, -1).join("") +
        "*" +
        filePath[filePath.length - 1] +
        "." +
        extenstion[extenstion.length - 1];
      fileNames.push(fileName);
    }

    var documentsList = [];
    const id = req.params.id;

    Modules.findById(id).then((result) => {
      documentsList = result.content;
      documentsList = documentsList.concat(fileNames);
      Modules.findByIdAndUpdate(id, { content: documentsList }).then((x) =>
        fs.rename(
          `./server/documents/${filePath[filePath.length - 1]}`,
          `./server/documents/${fileName}`,
          () => {
            res.sendStatus(200);
          }
        )
      );
    });
  } else {
    res.sendStatus(200);
  }
};

const get_lecture = (req, res) => {
  const name = req.params.name;
  res.sendFile(name, { root: documentPath });
};

const save_lectures = (req, res) => {
  var fileNames = [];
  var filePath = [];
  var fileName;
  var extenstion;


  if (typeof req.files.lectures !== "undefined") {
    for (let i = 0; i < req.files.lectures.length; i++) {
      filePath = req.files.lectures[i].path.split("/");
      extenstion = req.files.lectures[i].originalname.split(".")
      fileName = extenstion.slice(0,-1).join("")+ "*"+filePath[filePath.length - 1]+ "." + extenstion[extenstion.length-1];
      fileNames.push(fileName);
    }

    var documentsList = [];
    const id = req.params.id;

    Modules.findById(id).then((result) => {
      documentsList = result.lectures;
      documentsList = documentsList.concat(fileNames);
      Modules.findByIdAndUpdate(id, { lectures: documentsList }).then((x) =>
        fs.rename(`./server/documents/${filePath[filePath.length - 1]}`, `./server/documents/${fileName}`, ()=>{res.sendStatus(200)})
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
    create_assignment,
    get_assignment_model,
    edit_assignment,
    save_submitted_document,
    save_marked_document

};
