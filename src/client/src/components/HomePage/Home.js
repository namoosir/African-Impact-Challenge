import React from "react";
import HeaderAuth from "../AuthHeader";
import Post from "./Post";
import ModuleCard from "./ModuleCard";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter, Redirect } from "react-router-dom";

import {
  createPost,
  loadPosts,
  editPost,
  deletePost,
} from "../../actions/postAction";

import {
  createModules,
  isCreating,
  loadModules,
  cancelCreatingModule,
} from "../../actions/moduleAction";
import { has } from "express-mongo-sanitize";

const Home = ({
  user,
  posts,
  modules,
  isAuthenticated,
  isLoggedOut,
  isDeleted,
  history,
  createPost,
  loadPosts,
  editPost,
  deletePost,
  createModules,
  loadModules,
  isCreating,
  isCreatingModule,
  hasCreatedModule,
  cancelCreatingModule,
}) => {
  const [post, setPost] = useState({
    title: "",
    text: "",
    image: "",
  });

  const [newModule, setNewModule] = useState({
    nameModule: "",
  });

  const { title, text, image } = post;
  const { nameModule } = newModule;

  useEffect(() => {
    loadPosts(user, history);
    loadModules(history);
    console.log(posts);
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

  const onSubmitModule = (e) => {
    e.preventDefault();

    const module = {
      name: nameModule,
    };

    setNewModule({
      nameModule: "",
    });

    createModules(module, user, history);
    onCancelCreateModule(e);
    window.location.reload();
  };

  const onCreateModule = (e) => {
    e.preventDefault();

    isCreating();
    history.push("/home");
  };

  const onCancelCreateModule = (e) => {
    e.preventDefault();

    cancelCreatingModule();
    history.push("/home");
  };

  const onChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeModule = (e) => {
    setNewModule({
      ...newModule,
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
          <div className="container">
            <div className="card mt-5">
              <div className="card-body">
                <h2 className="card-title text-center">Modules</h2>
                {user &&
                user.typeOfUser === "Instructor" &&
                !isCreatingModule ? (
                  <form onSubmit={onCreateModule}>
                    <div className="text-center">
                      <button className="btn btn-success text-center">
                        Create Module
                      </button>
                    </div>
                  </form>
                ) : (
                  ""
                )}

                {isCreatingModule ? (
                  <>
                    <hr></hr>
                    <form onSubmit={onSubmitModule} className="mt-3 text-left">
                      <label htmlFor="nameModule" className="text-left mb-0">
                        <h5>Name of Module</h5>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="nameModule"
                        id="nameModule"
                        value={nameModule}
                        onChange={onChangeModule}
                      ></input>
                      <div className="text-center">
                        <button type="submit" className="btn btn-success mt-3">
                          Create Module
                        </button>
                      </div>
                    </form>
                    <form
                      className="text-center"
                      onSubmit={onCancelCreateModule}
                    >
                      <button type="submit" className="btn btn-danger mt-2">
                        Cancel
                      </button>
                    </form>
                    <hr></hr>
                  </>
                ) : (
                  ""
                )}

                {modules.length > 0 ? (
                  modules.map((module) => (
                    <ModuleCard module={module} history={history} />
                  ))
                ) : (
                  <div className="text-center mt-3">
                    <h4 className="text-light">Modules on the work!</h4>
                  </div>
                )}
              </div>
            </div>
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
            {Array.isArray(posts) ? posts.map((post) => (
              <div className="row justify-content-center">
                <div className="col-lg-5 mb-4">
                  <Post post={post} currentUser={user} history={history} />
                </div>
              </div>
            )) : ""}
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center mb-3"> Upcoming Events </h3>
              <h5 className="text-center">
                This section is currently under development!!
              </h5>
            </div>
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
  editPost,
  deletePost,
  createModules,
  isCreating,
  loadModules,
  cancelCreatingModule,
})(Home);
