import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ModuleCard from "../HomePage/ModuleCard";

import AuthHeader from "../AuthHeader";
import ModuleCalendar from "./moduleCalendar";
import Calendar from "./calendar"

import ModuleInfo from "./moduleInfo";
import ModuleCreate from "../displayModule";
import Assignments from "./AssignmentsView/Assignments";
import Content from "./ContentView/Content";
import Videos from "./VideoView/Videos";
import AssignmentView from "./StudentView/AssignmentView";
import ContentView from "./StudentView/ContentView";
import LectureView from "./StudentView/LectureView"

import {
  instructorUpload,
  startReload,
  reloadModule,
  stopReload,
} from "../../actions/moduleAction";

import {
  createModules,
  isCreating,
  loadModules,
  cancelCreatingModule,
} from "../../actions/moduleAction";

import {
  getEntrepreneurs,
  getAssignmentStudent,
  loadAssignments,
  afterCreateAssignment,
} from "../../actions/assignmentAction";


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
  state,
}) => {
  const [display, setDisplay] = useState({
    displayCalendar: false,
  });

  const { displayCalendar } = display;

  useEffect(() => {
    if (user) {
      loadAssignments(user, history);
    }
  }, []);

  useEffect(() => {
    if (assignmentCreated) {
      afterCreateAssignment();
      window.location.reload();
    }
  }, [assignmentCreated]);

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
    history.push("/module");
  };

  const onCancelCreateModule = (e) => {
    e.preventDefault();

    cancelCreatingModule();
    history.push("/module");
  };

  const onChangeModule = (e) => {
    setNewModule({
      ...newModule,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    history.push("/module_edit");
  };

  const onSubmitSubmission = (e) => {
    e.preventDefault();

    history.push("/submissions")
  }

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
                  ? module.name
                  : "CSCC01: Introduction to Software Engineering"}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {!displayCalendar ? (
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-lg-3">
            <ModuleCreate user={user} history={history} component="module" />
          </div>

          <div className="col-lg-6">
            <ModuleInfo module={module} />
            {user && module && user.id === module.user._id ? (
              <>
                <div className="d-flex justify-content-center">
                  <div className="container mb-3 mt-3">
                    <Assignments
                      className=""
                      assignments={module.assignments}
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="container mb-3">
                    <Content className="" content={module.content} />
                  </div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="container mb-3">
                    <Videos className="" videos={module.lectures} />
                  </div>
                </div>

                <div className="container text-center">
                  <form onSubmit={onSubmit}>
                    <button type="submit" className="btn btn-success btn-block">
                      Upload
                    </button>
                  </form>
                </div>
                <div>
                  <div className="container text-center">
                    <form onSubmit={onSubmitSubmission}>
                      <button type="submit" className="btn btn-light btn-block">
                        Submissions
                      </button>
                    </form>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="d-block justify-content-center mt-2">
                  <div className="d-flex justify-content-center">
                    <div className="container margins">
                      <LectureView
                        user={user}
                        history={history}
                        module={module}
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <div className="container margins">
                      <ContentView
                        user={user}
                        history={history}
                        module={module}
                      />
                    </div>
                  </div>

                  <div
                    className="bg-light justify-content-center margins px-2 py-2"
                    style={{ borderRadius: "25px" }}
                  >
                    <h1 className="text-dark text-center">Assignments</h1>
                    <>
                      {module.assignments && module.assignments.length > 0 ? (
                        module.assignments.map((assignment) => (
                          <div
                            key={generateKey(assignment)}
                            className="d-flex justify-content-center"
                          >
                            <div
                              key={generateKey(assignment)}
                              className="container margins"
                            >
                              <AssignmentView
                                key={generateKey(assignment)}
                                ind={generateKey(assignment)}
                                module={module}
                                assignment={assignment}
                                assignments={assignments}
                                user={user}
                                history={history}
                              />
                            </div>
                          </div>
                        ))
                      ) : (
                        <h3 className="text-dark text-center mt-4">
                          No assignments have been submitted by instructor!
                        </h3>
                      )}
                    </>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="col-lg-3">
            <div className="container">
              <ModuleCalendar module={module} user={user} setDisplay={setDisplay} />
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
        <Calendar module={module} user={user} setDisplay={setDisplay} />
        </div>
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
})(Module);
