const Entrepreneur = require('../models/entrepreneur')
const Instructor = require('../models/instructor')
const Partner = require('../models/partner');
const Company = require('../models/company')

const User = require('../models/instructor')


const user_details = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then(result => {
        res.send(result)
      //res.render('details', { User: result, title: 'User Details' });
    })
    .catch(err => {
      console.log(err);
      //res.render('404', { title: 'User not found' });
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