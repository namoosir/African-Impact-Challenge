const Entrepreneur = require('../models/entrepreneur')
const Instructor = require('../models/instructor')
const Partner = require('../models/partner');
const Company = require('../models/company')

const User = require('../models/user')
const imagesPath = './server/images'


const user_details = (req, res) => {
  const id = req.params.id;
  //const name = req.params.typeOfUser;
  User.findById(id)
    .then(result => {   
      //console.log(result)
      result.populate({path: "typeUser", model: result.typeOfUser}, function (err,result) {console.log(result); res.send(result)})      // always makes sure that the client sends the general user

    })
    .catch(err => {
      console.log(err);
    });
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

//timestamp = new Date().getTime().toString();

/* 
const blog_create_get = (req, res) => {
  res.render('create', { title: 'Create a new blog' });
}

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then(result => {
      res.redirect('/blogs');
    })
    .catch(err => {
      console.log(err);
    });
}

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
} */

module.exports = {
  user_details,
  user_updates,
  get_image
  //blog_create_get, 
  //blog_create_post, 
  //blog_delete
}