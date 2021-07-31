import React from "react";
import { v1 as uuid } from "uuid";

import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { createConference } from "../../actions/videoAction";

const CreateRoom = ({ videos, user, history, createConference }) => {
  const [createMeeting, setCreateMeeting] = useState({
    isCreating: false,
  });

  const [room, setRoom] = useState({
    meetingName: "",
  });

  const [rooms, setRooms] = useState({
    videoRooms: videos ? videos : "",
  });

  const { isCreating } = createMeeting;
  const { meetingName } = room;
  const { videoRooms } = rooms;

  const create = (e) => {
    e.preventDefault();

    const id = uuid();

    const link = `/room/${id}`;

    const video = {
      name: meetingName,
      link: link,
      owner: user,
    };

    setRooms({
      ...rooms,
      videoRooms: [...videoRooms, video],
    });

    setCreateMeeting({
      isCreating: false,
    });

    createConference(video);
  };

  const startCreating = (e) => {
    e.preventDefault();

    setCreateMeeting({
      isCreating: true,
    });
  };

  const stopCreating = (e) => {
    e.preventDefault();

    setCreateMeeting({
      isCreating: false,
    });
  };

  const onChangeVideo = (e) => {
    e.preventDefault();

    setRoom({
      ...room,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <hr></hr>
      <div className="mb-3">
        {Array.isArray(videoRooms)
          ? videoRooms.map((rom) => (
              <div className="">
                <hr></hr>
                <a
                  className="btn w-100"
                  target="_blank"
                  href={`http://localhost:3000${rom.link}`}
                >
                  <h3 className="">{rom.name}</h3>
                </a>
                <hr></hr>
              </div>
            ))
          : ""}
      </div>

      {!isCreating ? (
        <button className="btn btn-success" onClick={startCreating}>
          Create room
        </button>
      ) : (
        <div className="container">
          <form className="d-inline me-2" onSubmit={create}>
            <div className="row">
              <div className="col-lg-2">
                <label className="text-left mt-1" htmlFor="meetingName">
                  <h4>Name</h4>
                </label>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  name="meetingName"
                  id="meetingName"
                  value={meetingName}
                  onChange={onChangeVideo}
                />
              </div>

              <div className="col-lg-2">
                <button className="btn btn-success mt-0">Create</button>
              </div>
            </div>
          </form>

          <form className="ms-2 d-inline" onSubmit={stopCreating}>
            <button className="btn btn-danger">Cancel</button>
          </form>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  videos: state.video.videos,
});

export default connect(mapStateToProps, { createConference })(CreateRoom);
