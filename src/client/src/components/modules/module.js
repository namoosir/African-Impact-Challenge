import { useEffect, useState } from "react";
import { connect } from "react-redux";

import AuthHeader from "../AuthHeader";
import ModuleCalendar from "./moduleCalendar";
import Calendar from "./calendar";
import ModuleInfo from "./moduleInfo";
import ModuleCreate from "../displayModule";
import Assignments from "./AssignmentsView/Assignments";
import Content from "./ContentView/Content";
import Videos from "./VideoView/Videos";
import AssignmentView from "./StudentView/AssignmentView";
import ContentView from "./StudentView/ContentView";
import LectureView from "./StudentView/LectureView";

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
  assignments,
  loadAssignments,
  afterCreateAssignment,
  assignmentCreated,
  eventAdded,
  state,
}) => {
  const [display, setDisplay] = useState({
    displayCalendar: false,
  });

  const { displayCalendar } = display;

  const [events, setEvents] = useState({
    currEvents: module ? module.events : ""
  })

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

  const onSubmit = (e) => {
    history.push("/module_edit");
  };

  const onSubmitSubmission = (e) => {
    e.preventDefault();

    history.push("/submissions");
  };

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

      {!displayCalendar ? (
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-lg-3">
            <ModuleCreate user={user} history={history} component="module" />
          </div>

          <div className="col-lg-6">
            <ModuleInfo module={module} />
            {user && module && module.user && user.id === module.user._id ? (
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
                    <div className="container mb-3 mt-2">
                      <LectureView
                        user={user}
                        history={history}
                        module={module}
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <div className="container mb-3">
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
              <ModuleCalendar
                module={module}
                user={user}
                setDisplay={setDisplay}
              />
            </div>
          </div>
        </div>
      ) : (
          <Calendar module={module} user={user} setDisplay={setDisplay} history={history} events={events} setEvents={setEvents}/>
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
  isAuthenticated: state.user.isAuthenticated,
  assignmentCreated: state.assignment.assignmentCreated,
  state: state,
});

export default connect(mapStateToProps, {
  getEntrepreneurs,
  getAssignmentStudent,
  loadAssignments,
  afterCreateAssignment,
})(Module);
