import AuthHeader from "../AuthHeader";

import { useEffect, useState } from "react";

import { connect } from "react-redux";

import Assignment from "./AssignmentUploadCard/Assignment"
import Videos from "./VideoUploadCard/Videos"

import moduleStylesheet from "../stylesheets/module.css";

const Module = ({ user, isAuthenticated, history, module }) => {

  const [moduleEdit, setModuleEdit] = useState({
    moduleEdit: module
    // moduleEdit: {
    //   ...module,
    //   assignmentFile : [],
    //   videoFile: []
    // }
});

  useEffect(() => {
    console.log(module)
  }, [])

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
      
      <div className="d-flex justify-content-center">
        <div className="container margins">
          <Assignment className="" module={module} moduleEdit={moduleEdit} setModuleEdit={setModuleEdit}/>
        </div>
      </div>
      
      <div className="d-flex justify-content-center">
        <div className="container margins ">
          <Videos className="" module={module} moduleEdit={moduleEdit} setModuleEdit={setModuleEdit}/>
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
