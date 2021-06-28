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
      //console.log(result)
      result.populate({path: "typeUser", model: result.typeOfUser}, function (err,result) {console.log(result); res.send(result)})      // always makes sure that the client sends the general user

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
  get_all_profiles
  //blog_create_get, 
  //blog_create_post, 
  //blog_delete
}