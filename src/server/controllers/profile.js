const Entrepreneur = require('../models/entrepreneur')
const Instructor = require('../models/instructor')
const Partner = require('../models/partner');
const Company = require('../models/company')

const User = require('../models/user')


 const user_details = (req, res) => {
  const id = req.params.id;
  //const name = req.params.typeOfUser;
  User.findById(id)
    .then(result => {      
      result.populate({path: "typeUser", model: result.typeOfUser}, function (err,result) {res.send(result)})      // always makes sure that the client sends the general user
    })
    .catch(err => {
      console.log(err);
    });
} 

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
  user_details
  //blog_create_get, 
  //blog_create_post, 
  //blog_delete
}