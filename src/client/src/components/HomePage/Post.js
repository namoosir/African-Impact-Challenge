import post from "../stylesheets/post.css";

import { useState, useEffect } from "react";
import { getImageURL } from "../../utils/getImage";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  editPost,
  deletePost,
  addComment,
  editingPost,
  cancelEdit,
} from "../../actions/postAction";

const Post = (props) => {
  const [comment, setComment] = useState({
    textComment: "",
  });

  const [postEdit, setPostEdit] = useState({
    titleEdit: props.post.title,
    textEdit: props.post.text,
    imageEdit: props.post.image,
  });

  let { titleEdit, textEdit, imageEdit } = postEdit;
  const { textComment } = comment;

  useEffect(() => {
    console.log(props);
  }, [])

  const onChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const onChangePost = (e) => {
    setPostEdit({
      ...postEdit,
      [e.target.name]: e.target.value,
    });
  };

  const onComment = (e) => {
    e.preventDefault();

    const commentInfo = {
      comment: textComment,
      commenter: props.currentUser.id,
      post: props.post._id,
    };

    comment.textComment = "";

    props.addComment(commentInfo, props.history);

    window.location.reload();
  };

  const onDelete = (e) => {
    e.preventDefault();

    props.deletePost(props.post._id, props.history);
    
    window.location.reload();
  };

  const onEditing = (e) => {
    e.preventDefault();

    props.editingPost();
    props.history.push("/home");
  };

  const onCancelEdit = (e) => {
    e.preventDefault();

    props.cancelEdit();
    props.history.push("/home");
  };

  const onEdit = (e) => {
    e.preventDefault();

    const sentPost = {
      text: textEdit,
      id: props.post._id,
    };

    props.post.text = textEdit;

    props.editPost(sentPost, props.history);
    props.history.push("/home");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-2">
      <div className="row mt-5">
        <div className="card col-lg-12" style={{ width: "46rem" }}>
          <div className="mb-1">
            <div className="top-row mt-3">
              <div className="text-left ms-2 mb-2 d-flex justify-content-between">
                <h2 className="d-inline">
                  {props.post ? props.post.title : "Generic Title"}
                </h2>
                {props.post &&
                props.currentUser &&
                props.post.poster &&
                props.post.poster._id === props.currentUser.id ? (
                  <div className="d-flex justify-content-right me-2">
                    <form onSubmit={onEditing}>
                      <button
                        type="submit"
                        className="btn btn-success btn-md mt-0 my-auto me-3"
                      >
                        Edit
                      </button>
                    </form>
                    <form onSubmit={onDelete}>
                      <button
                        type="submit"
                        className="btn btn-danger btn-md mt-0 my-auto me-3"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="bg-light mx-3 py-2 px-2 align-items-center title mt-3">
                <img
                  src={props.post.poster ? getImageURL(props.post.poster._id) : ""}
                  width="75"
                  height="75"
                  className="d-inline"
                ></img>
                <div className="d-inline">
                  <h4 className="d-inline ms-3">
                    {props.post.poster
                      ? props.post.poster.username
                      : "PineappleEat43"}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-1 mt-0">
            <div className="centre-row">
              <div className="col-12">
                <div className="card-body">
                  {!props.isEditing ? (
                    props.post ? (
                      <div className="bg-light textP px-2 py-2">
                        {props.post.text}
                      </div>
                    ) : (
                      <div className="bg-light textP px-2 py-2">
                        {"This is an auto-generated text"}
                      </div>
                    )
                  ) : (
                    <div className="">
                      <form onSubmit={onEdit}>
                        <div className="col-lg-12">
                          <textarea
                            id="textEdit"
                            name="textEdit"
                            className="form-control"
                            rows="2"
                            value={textEdit}
                            onChange={onChangePost}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-success mt-3 d-block mx-auto"
                        >
                          Submit Edit
                        </button>
                      </form>
                      <form
                        className="d-flex justify-content-center"
                        onSubmit={onCancelEdit}
                      >
                        <button
                          type="submit"
                          className="btn btn-danger mt-3 d-inline"
                        >
                          Cancel Edit
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 mx-3 justify-content-center">
            <div className="last-row">
              <form onSubmit={onComment}>
                <label htmlFor="textComment" className="d-inline"></label>
                <div className="col-lg-12">
                  <textarea
                    className="form-control"
                    id="textComment"
                    name="textComment"
                    placeholder="Write your comment here!"
                    rows="2"
                    value={textComment}
                    onChange={onChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-light btn-md mt-3 d-block mx-auto"
                >
                  Comment
                </button>
              </form>
            </div>
          </div>

          {props.post && props.post.comments && props.post.comments.length > 0
            ? props.post.comments.map((comment) => (
                <div className="bg-light my-3 comments textP mx-3">
                  <img
                    src={getImageURL(comment.user._id)}
                    width="50"
                    height="50"
                    className="d-inline mx-2 my-2"
                  ></img>
                  <h4 className="d-inline">
                    {comment.user ? comment.user.username : "PineappleEat43"}{" "}
                  </h4>
                  <p className="mx-3" style={{ color: "black" }}>
                    {comment.comment
                      ? comment.comment
                      : "This is an autogenerated paragraph"}
                  </p>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  editPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  editingPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isEditing: state.post.isEditing,
});

export default connect(mapStateToProps, {
  editPost,
  deletePost,
  addComment,
  editingPost,
  cancelEdit,
})(Post);
