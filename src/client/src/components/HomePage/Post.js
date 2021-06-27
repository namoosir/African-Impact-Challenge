
import post from "../stylesheets/post.css";

import { useState, useEffect } from "react";

import {connect} from 'react-redux'

import {
  editPost,
  deletePost,
} from "../../actions/postAction";


const Post = (props) => {


  const onDelete = (e) => {
    e.preventDefault();

    props.deletePost(props.post._id, props.history);
    window.location.reload();
  }

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
                {(props.post && props.currentUser) && (props.post.poster === props.currentUser.id) ? 
                  <form onSubmit={onDelete}>
                  <button type="submit" className='btn btn-danger btn-md mt-0 my-auto me-3'>Delete</button>
                  </form> : ""} 
              </div>
              <div className="bg-light mx-3 py-2 px-2 align-items-center title mt-3">
                <img
                  src="https://thispersondoesnotexist.com/image"
                  width="75"
                  height="75"
                  className="d-inline"
                ></img>
                <div className='d-inline'>
                  <h4 className="d-inline ms-3">
                    {props.user ? props.user.username : "PineappleEat43"}{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-1 mt-0">
            <div className="centre-row">
              <div className="col-12">
                <div className="card-body">
                  <h6 className="bg-light textP px-2 py-2"> {props.post ? props.post.text : "This is an auto-generated text"} </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 mx-3 justify-content-center">
            <div className="last-row">
              <div className="col-lg-12">
                <textarea
                  rows="2"
                  className="comments form-control"
                  id="comments"
                  name="comments"
                  placeholder="Write your comment here!"
                />
              </div>
              <button className="btn btn-light btn-md mt-3 d-block mx-auto">Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  editPost,
  deletePost,
})(Post);
