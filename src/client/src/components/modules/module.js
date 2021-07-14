import AuthHeader from "../AuthHeader";
import axios from "axios";

import { useEffect, useState } from "react";

import { connect } from "react-redux";
import ModuleCard from "../HomePage/ModuleCard";

import Assignments from "./AssignmentsView/Assignments";
import Content from "./ContentView/Content";
import Videos from "./VideoView/Videos";
import AssignmentView from "./StudentView/AssignmentView";

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
  afterCreateAssignment
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
  const [newModule, setNewModule] = useState({
    nameModule: "",
  });

  const { nameModule } = newModule;

  useEffect(() => {
    if(user) {
      loadAssignments(user, history);
    }
    loadModules(history);
  }, []);

  useEffect(() => {
    if(assignmentCreated) {
      afterCreateAssignment();
      window.location.reload();
    }
  }, [assignmentCreated])

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

      <div className="row d-flex justify-content-center">
        <div className="col-lg-3">
          <div className="container">
            <div className="card mt-3">
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

        <div className="col-lg-6">
          {user && module && user.id === module.user._id ? (
            <>
              <div className="d-flex justify-content-center">
                <div className="container mb-3 mt-3">
                  <Assignments className="" assignments={module.assignments} />
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
            </>
          ) : (
            <>
              <div className="d-flex justify-content-center mt-2">
                <div
                  className="bg-light margins px-4 py-4"
                  style={{ borderRadius: "25px" }}
                >
                  <h1 className="text-dark text-center">Assignments</h1>
                  <>
                    {module.assignments && module.assignments.length > 0 ? (
                      module.assignments.map((assignment) => (
                        <div className="d-flex justify-content-center">
                          <div className="container margins">
                            <AssignmentView assignment={assignment} assignments={assignments} user={user} history={history} />
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
            <div className="card mt-3">
              <div className="card-body">
                <h2 className="card-title text-center">Recent Submissions</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  afterCreateAssignment
})(Module);
