const Entrepreneur = require('../models/entrepreneur');
const Instructor = require('../models/instructor');
const Partner = require('../models/partner');
const Company = require('../models/company');
const User = require('../models/user');
const Posts = require('../models/posts');
const { post } = require('../routes/routes');


const create_post = async (req, res) => {

  
    const {title, text, image} = req.body.post;
    const post = new Posts({
        title: title,
        text: text,
        image: image,
        poster: req.body.user.id,
    });

    refPost = await post.save();

    res.status(200).json(refPost);
}

const add_comment = async (req, res) => {

    postid = req.body.id;
    commenter = req.body.commenter;
    comment = req.body.comment;

    const post = await Posts.findById(postid);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
  
    post.comments.push({comment:comment, user:commenter});

  
    await post.save();
    res.status(200).json(post);
}

const get_recent_posts = async (req, res) => {
  const posts = await Posts.find({}).sort('-date');
  const result = posts.slice(0, 10);
  let ans = [];
 
  // for (const post of result) {

  //  var populated2 = await myPop(populated1, 'comments.user').then(function(result) {
  //     return result
  //  })
    
  //  ans.push(populated2)

  // };  

  ans.push(posts);

  res.status(200).json(ans);
}

async function myPop(post, field) {
let itemPopulated = await post.populate(field).execPopulate();
return itemPopulated

} 

const edit_post = async (req, res) => {
  text = req.body.text;
  image = req.body.image;
  postid = req.body.id;

  const post = await Posts.findById(postid);

  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }

  post.text = text;
  post.image = image;

  await post.save();
  res.status(200).send(post);

}

const remove_post = async (req, res) => {
  postid = req.body.id;

  await Posts.deleteOne({_id: postid});
}


module.exports = {
  create_post,
  add_comment,
  get_recent_posts,
  edit_post,
  remove_post
}