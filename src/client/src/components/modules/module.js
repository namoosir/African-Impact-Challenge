import AuthHeader from "../AuthHeader";

import { connect } from "react-redux";

import moduleStylesheet from "../stylesheets/module.css";

const Module = ({ user, isAuthenticated, history, module }) => {
  return (
    <div>
      <AuthHeader
        user={user}
        isAuthenticate={isAuthenticated}
        history={history}
      />
      <div className="container d-flex justify-content-center">
        <div className="card module my-4">
          <div className="card-body">
            <h1 className="card-title text-center">
              {module && module.name
                ? module.name
                : "CSCC01: Introduction to Software Engineering"}
            </h1>
            <div className="bg-light">
              <hr className="divider"></hr>
            </div>

            <div className="text-center my-3">
                <h3 className="ms-3 bg-light assignment d-inline-block px-2 py-2">Assignments</h3>
            </div>

            <div className="text-center mt-3">
            <h3 className="ms-3 bg-light assignment d-inline-block px-2 py-2">Lectures</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user.sentUser,
  module: state.module.clickedModule,
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, null)(Module);
