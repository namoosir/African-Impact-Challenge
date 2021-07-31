import AuthHeader from "../../AuthHeader";
import axios from "axios";

import { useEffect, useState } from "react";

import { connect } from "react-redux";
import ModuleCard from "../../HomePage/ModuleCard";

// import Assignments from "./AssignmentsView/Assignments";
// import Content from "./ContentView/Content";
// import Videos from "./VideoView/Videos";
// import AssignmentView from "./StudentView/AssignmentView";
// import ContentView from "./StudentView/ContentView";
// import LectureView from "./StudentView/LectureView"

import SingleAssignmentInstructor from "./InstructorView/SingleAssignmentInstructor";

import {
  instructorUpload,
  startReload,
  reloadModule,
  stopReload,
} from "../../../actions/moduleAction";

import {
  createModules,
  isCreating,
  loadModules,
  cancelCreatingModule,
} from "../../../actions/moduleAction";

import {
  getEntrepreneurs,
  getAssignmentStudent,
  loadAssignments,
  afterCreateAssignment,
  loadAllAssignments,
} from "../../../actions/assignmentAction";

import moduleStylesheet from "../../stylesheets/module.css";

const Submission = ({
  user,
  isAuthenticated,
  history,
  module,
  instructorUpload,
  startReload,
  reloadModule,
  toReloadModule,
  stopReload,
  modules,
  isCreatingModule,
  hasCreatedModule,
  isCreating,
  cancelCreatingModule,
  createModules,
  loadModules,
  assignments,
  getEntrepreneurs,
  entrepreneurs,
  getAssignmentStudent,
  loadAssignments,
  afterCreateAssignment,
  assignmentCreated,
  loadAllAssignments,
  state,
}) => {
  useEffect(() => {
    if (user.typeOfUser !== "Instructor") {
      history.push("/module");
    }
    loadAllAssignments(module, history);
  }, []);

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
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
                  ? `${module.name} - Submissions`
                  : "CSCC01: Introduction to Software Engineering"}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {assignments && Array.isArray(assignments) ? (
        <>
          {assignments.map((assignment) => (
            <div className="d-flex justify-content-center">
              <div className="container margins">
                <SingleAssignmentInstructor
                  user={user}
                  assignment={assignment}
                  history={history}
                  ind={generateKey(assignment.name)}
                  key={generateKey(assignment.name)}
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user.sentUser,
  modules: state.module.modules,
  assignments: state.assignment.assignments,
  entrepreneurs: state.assignment.entrepreneurs,
  module: state.module.clickedModule,
  toReloadModule: state.module.reloadModule,
  isAuthenticated: state.user.isAuthenticated,
  isCreatingModule: state.module.isCreatingModule,
  hasCreatedModule: state.module.hasCreatedModule,
  assignmentCreated: state.assignment.assignmentCreated,
  state: state,
});

export default connect(mapStateToProps, {
  instructorUpload,
  startReload,
  reloadModule,
  stopReload,
  createModules,
  isCreating,
  loadModules,
  cancelCreatingModule,
  getEntrepreneurs,
  getAssignmentStudent,
  loadAssignments,
  afterCreateAssignment,
  loadAllAssignments,
})(Submission);
