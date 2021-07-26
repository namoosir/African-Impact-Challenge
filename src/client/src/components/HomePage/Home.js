import React from "react";
import HeaderAuth from "../AuthHeader";
import Post from "./Post";
import ModuleCard from "./ModuleCard";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ModuleCreate from "../displayModule";
import Calendar from "./homeCalendar";

import { createPost, loadPosts } from "../../actions/postAction";
import { updateUserHome } from "../../actions/userAction";

const Home = ({
  user,
  posts,
  isAuthenticated,
  history,
  createPost,
  loadPosts,
  updateUserHome,
}) => {
  const [post, setPost] = useState({
    title: "",
    text: "",
    image: "",
  });

  const { title, text, image } = post;

  useEffect(() => {
    loadPosts(user, history);
    updateUserHome(user, history);
  }, []);

  const onSubmitPost = (e) => {
    e.preventDefault();

    const sentPost = {
      title: post.title,
      text: post.text,
      image: post.image,
    };

    post.title = "";
    post.text = "";
    post.image = "";

    createPost(user, sentPost, history);
    window.location.reload();
  };

  const onChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <HeaderAuth
        user={user}
        isAuthenticated={isAuthenticated}
        history={history}
      />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-3">
          <div className="mt-5">
            <ModuleCreate user={user} history={history} component="home" />
          </div>
        </div>

        <div className="col-lg-5">
          <div className="container">
            <div className="card mt-5">
              <div className="card-body">
                <h1 className="card-title text-center">Create Post</h1>
                <div className="mt-4">
                  <form onSubmit={onSubmitPost}>
                    <div className="row">
                      <label
                        htmlFor="title"
                        className="col-sm-2 col-form-label text-center me-0 mt-0 pe-0"
                      >
                        <h5>Title</h5>
                      </label>
                      <div className="col-sm-10 ms-0 ps-0">
                        <input
                          className="form-control"
                          id="title"
                          name="title"
                          type="text"
                          value={title}
                          onChange={onChange}
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <label
                        htmlFor="body"
                        className="col-sm-2 col-form-label text-center me-0 pe-0"
                      >
                        <h5>Body</h5>
                      </label>
                      <div className="col-sm-10 ms-0 ps-0">
                        <textarea
                          className="form-control"
                          id="text"
                          name="text"
                          rows="4"
                          value={text}
                          onChange={onChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <label
                        htmlFor="image"
                        className="col-sm-2 col-form-label text-center me-0 pe-0"
                      >
                        <h5>Image</h5>
                      </label>
                      <div className="col-sm-10 ms-0 ps-0">
                        <input
                          className="form-control"
                          name="image"
                          id="image"
                          type="file"
                          id="formFile"
                          value={image}
                          onChange={onChange}
                        ></input>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-light d-block mx-auto"
                    >
                      Create
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            {Array.isArray(posts)
              ? posts.map((post) => (
                  <div className="row justify-content-center">
                    <div className="col-lg-5 mb-4">
                      <Post post={post} currentUser={user} history={history} />
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>

        <div className="col-lg-3">
          <div className="ms-4 mt-5">
            <Calendar user={user} history={history} />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  createPost: PropTypes.func.isRequired,
  loadPosts: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.user.sentUser,
  posts: state.post.posts,
  modules: state.module.modules,
  isDeleted: state.post.isDeleted,
  isAuthenticated: state.user.isAuthenticated,
  isLoggedOut: state.user.isLoggedOut,
  isCreatingModule: state.module.isCreatingModule,
  hasCreatedModule: state.module.hasCreatedModule,
});

export default connect(mapStateToProps, {
  createPost,
  loadPosts,
  updateUserHome,
})(Home);
