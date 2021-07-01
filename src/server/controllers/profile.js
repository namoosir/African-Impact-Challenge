const Entrepreneur = require('../models/entrepreneur')
const Instructor = require('../models/instructor')
const Partner = require('../models/partner');
const Company = require('../models/company')
const User = require('../models/user')
const imagesPath = './server/images'

const imagesPath = './server/images'
const documentPath = './server/documents'

const userType = {"Entrepreneur": Entrepreneur,
                "Instructor": Instructor,
                "Partner": Partner,
                "Company": Company}

const { expect } = require('chai');

const { expect } = require('chai');


const user_details = (req, res) => {
  const id = req.params.id;
  //const name = req.params.typeOfUser;
  User.findById(id)
    .then(result => {   
      console.log("In backend", result)
      result.populate({path: "typeUser", model: result.typeOfUser}, function (err,result) {console.log(result); res.status(200).json((result))})      // always makes sure that the client sends the general user

    })
    .catch(err => {
      console.log(err);
    });
} 

const get_all_profiles = async (req, res) => {
  var ans = [];
  var final = [];
  ans = await User.find().sort('name').then(result => { return result })

  for (const user of ans) {
    var populated1 = await myPop2(user).then(function (result) {
      return result
    })

    final.push(populated1)
  }

  res.send(final)
}


async function myPop2(post) {
  let itemPopulated = await post.populate({path: "typeUser", model: post.typeOfUser}).execPopulate();
  return itemPopulated
  
  } 
const userType = {"Company" : Company, "Entrepreneur": Entrepreneur, "Partner": Partner, "Instructor": Instructor};

const user_updates = (req, res) =>{
  User.findByIdAndUpdate({_id: req.params.id}, req.body, {new : true})
  .then(result => {
    const typeofUser = result.typeOfUser;
    userType[typeofUser].findByIdAndUpdate({_id: result.typeUser}, req.body.typeUser)
    .then(() => {
      result.populate({path: "typeUser", model: result.typeOfUser}, function (err,result) {res.send(result)})
    })
    .catch(err => {console.log(err)})
  })
  .catch(err => {
    console.log(err);
  })
}

const get_image = (req, res) =>{
  const id = req.params.id;
  User.findById(id)
    .then(result => {
      res.sendFile(result.image, {root: imagesPath })   
    }) 
}

const save_image = (req, res) =>{
  
  expect(req.files.imageURL, 'file needed').to.exist;
  const expensesFile = req.files.imageURL[0];

  const fileName = (expensesFile.path).split('/');

  User.findByIdAndUpdate(req.params.id, {image: fileName[fileName.length-1] }).then(result => res.sendStatus(200))
  
}

//timestamp = new Date().getTime().toString();

/* 
const blog_create_get = (req, res) => {
  res.render('create', { title: 'Create a new blog' });

}


async function myPop2(post) {
  let itemPopulated = await post.populate({path: "typeUser", model: post.typeOfUser}).execPopulate();
  return itemPopulated
  
  } 

const userType = {"Company" : Company, "Entrepreneur": Entrepreneur, "Partner": Partner, "Instructor": Instructor};

const user_updates = (req, res) =>{
  User.findByIdAndUpdate({_id: req.params.id}, req.body, {new : true})
  .then(result => {
    const typeofUser = result.typeOfUser;
    userType[typeofUser].findByIdAndUpdate({_id: result.typeUser}, req.body.typeUser)
    .then(() => {
      result.populate({path: "typeUser", model: result.typeOfUser}, function (err,result) {res.send(result)})
    })
    .catch(err => {console.log(err)})
  })
  .catch(err => {
    console.log(err);
  })
}

const get_image = (req, res) =>{
  const id = req.params.id;
  User.findById(id)
    .then(result => {
      res.sendFile(result.image, {root: imagesPath })   
    }) 
}

const save_image = (req, res) =>{
  
  expect(req.files.imageURL, 'file needed').to.exist;
  const expensesFile = req.files.imageURL[0];

  const fileName = (expensesFile.path).split('/');
  console.log(fileName[fileName.length-1])
  User.findByIdAndUpdate(req.params.id, {image: fileName[fileName.length-1] }).then(result => res.sendStatus(200))
  
}

const get_document = (req, res) =>{
  const name = req.params.name;
  res.sendFile(name, {root: documentPath })   
}

const save_documents = (req, res) =>{

  expect(req.files.documents, 'file needed').to.exist;

  var fileNames = [];

  var expensesFile = [];
  var filePath = [];
  var fileName;

  for (let i = 0; i < req.files.documents.length; i++) {

    filePath = (req.files.documents[i].path).split('/');
    fileName = filePath[filePath.length-1];
    fileNames.push(fileName)

  }

  var documentsList = []
  const id = req.params.id

  User.findById(id).then(result => 
    {
      userType[result.typeOfUser].findById(result.typeUser).then(result2=>{
        documentsList = result2.documents;
        documentsList = documentsList.concat(fileNames);
        userType[result.typeOfUser].findByIdAndUpdate(result.typeUser,{documents: documentsList}).then(x=>res.sendStatus(200))
      })
    }) 
}


/* documentsList = result.documents;
documentsList.push(fileName);
User.findByIdAndUpdate(req.params.id, {documents: documentsList }).then(result => res.sendStatus(200)) */

//timestamp = new Date().getTime().toString();



module.exports = {
  user_details,
  get_all_profiles,
  user_updates,
  get_image,
  save_image,
  get_document,
  save_documents
}