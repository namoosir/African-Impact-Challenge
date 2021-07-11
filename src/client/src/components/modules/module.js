import AuthHeader from "../AuthHeader";
import axios from "axios";

import { useEffect, useState } from "react";

import { connect } from "react-redux";

import Assignments from "./AssignmentsView/Assignments";
import Content from "./ContentView/Content";
import AssignmentView from "./StudentView/AssignmentView";

import {
  instructorUpload,
  startReload,
  reloadModule,
  stopReload,
} from "../../actions/moduleAction";

import moduleStylesheet from "../stylesheets/module.css";

const Module = ({
  user,
  isAuthenticated,
  history,
  module,
  instructorUpload,
  startReload,
  reloadModule,
  toReloadModule,
  stopReload,
  state,
}) => {
  useEffect(() => {
    console.log(state);
  }, []);

  // useEffect(() => {
  //   if (toReloadModule) {
  //     reloadModule(module, history);
  //     window.location.reload();
  //   }
  // }, [toReloadModule]);

  const onSubmit = (e) => {
    history.push("/module_edit");
  };

  return (
    <div>
      <AuthHeader
        user={user}
        isAuthenticate={isAuthenticated}
        history={history}
      />
      <div className="d-flex justify-content-center mt-2">
        <div className="container margins">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">
                {module && module.name
                  ? module.name
                  : "CSCC01: Introduction to Software Engineering"}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {user && module && user.id === module.user._id ? (
        <>
          <div className="d-flex justify-content-center">
            <div className="container margins">
              <Assignments className="" assignments={module.assignments} />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="container margins">
              <Content className="" content={module.content} />
            </div>
          </div>

          <div className="container text-center">
            <form onSubmit={onSubmit}>
              <button type="submit" className="btn btn-success btn-block">
                Upload
              </button>
            </form>
          </div>

        </>
      ) : (
        ""
      )}


      <div className="d-flex justify-content-center">
        <div
          className="bg-light margins px-4 py-4"
          style={{ borderRadius: "25px" }}
        >
          <h1 className="text-dark text-center">Assignments</h1>
          {module.assignments.map((assignment) => (
            <div className="d-flex justify-content-center">
              <div className="container margins">
                <AssignmentView assignment={assignment} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user.sentUser,
  module: state.module.clickedModule,
  toReloadModule: state.module.reloadModule,
  isAuthenticated: state.user.isAuthenticated,
  state: state,
});

export default connect(mapStateToProps, {
  instructorUpload,
  startReload,
  reloadModule,
  stopReload,
})(Module);
