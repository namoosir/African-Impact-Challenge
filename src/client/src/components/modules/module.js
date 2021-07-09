import AuthHeader from "../AuthHeader";
import axios from 'axios'

import { useEffect, useState } from "react";

import { connect } from "react-redux";

import Assignment from "./AssignmentUploadCard/Assignment";
import Videos from "./VideoUploadCard/Videos";

import { instructorUpload } from "../../actions/moduleAction";

import moduleStylesheet from "../stylesheets/module.css";

const Module = ({ user, isAuthenticated, history, module, instructorUpload }) => {
  const [moduleEdit, setModuleEdit] = useState({
    moduleEdit: {
      ...module,
      assignmentFiles: [],
      videoFiles: [],
    },
  });


  useEffect(() => {
    console.log(module);
  }, [])

  const onSubmit = async(e) => {
    e.preventDefault();

    await Promise.all([
      new Promise((resolve, reject) => {
        const url = `http://localhost:3001/addAssignments/${moduleEdit.moduleEdit._id}`;
  
        let documentsFormData = new FormData();
        moduleEdit.moduleEdit.assignmentFiles.forEach((assignment) => {
          documentsFormData.append("documents", assignment);
        });
        const formData = documentsFormData;
  
        const config = {
          headers: { "content-type": "multipart/form-data" },
        };
  
        axios
          .post(url, formData, config)
          .then((response) => {
            resolve();
          })
          .catch((error) => {
            resolve();
            console.log(error);
          });
      }),
    ]);
  }

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
              <Assignment
                className=""
                module={module}
                moduleEdit={moduleEdit}
                setModuleEdit={setModuleEdit}
              />
            </div>
          </div>

          {/* <div className="d-flex justify-content-center">
            <div className="container margins ">
              <Videos
                className=""
                module={module}
                moduleEdit={moduleEdit}
                setModuleEdit={setModuleEdit}
              />
            </div>
          </div> */}

          <div className="container text-center">
            <form onSubmit={onSubmit}>
              <button type="submit" className="btn btn-success btn-block">
                Upload Assignment
              </button>
            </form>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user.sentUser,
  module: state.module.clickedModule,
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, {instructorUpload})(Module);
