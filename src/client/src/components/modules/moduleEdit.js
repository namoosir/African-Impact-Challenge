import AuthHeader from "../AuthHeader";
import axios from "axios";

import { useEffect, useState } from "react";

import { connect } from "react-redux";

import Assignment from "./AssignmentUploadCard/Assignment";
import Content from "./ContentUploadCard/Content";
import Videos from "./VideoUploadCard/Videos";

import {
  instructorUpload,
  startReload,
  reloadModule,
  stopReload,
} from "../../actions/moduleAction";

import moduleStylesheet from "../stylesheets/module.css";

const ModuleEdit = ({
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
  const [moduleEdit, setModuleEdit] = useState({
    moduleEdit: {
      ...module,
      assignmentFiles: [],
      contentFiles: [],
    },
  });

  const onSubmit = async(e) => {
    e.preventDefault();

    await Promise.all([

      new Promise((resolve, reject) => {
        
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...moduleEdit.moduleEdit,
          }),
        };

        console.log("Module Edit",moduleEdit.moduleEdit);
        console.log("Stringified Body",requestOptions.body);

        fetch(
          `http://localhost:3001/editModule/${moduleEdit.moduleEdit._id}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => {
            //console.log("DATA handled",data)
            resolve();
          });

      }),

      new Promise((resolve, reject) => {
        const url = `http://localhost:3001/addAssignments/${moduleEdit.moduleEdit._id}`;

        let documentsFormData = new FormData();
        moduleEdit.moduleEdit.assignmentFiles.forEach((assignment) => {
          documentsFormData.append("assignments", assignment);
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

      new Promise((resolve, reject) => {
        const url2 = `http://localhost:3001/addContent/${moduleEdit.moduleEdit._id}`;

        let documentsFormData2 = new FormData();
        moduleEdit.moduleEdit.contentFiles.forEach((content) => {
          documentsFormData2.append("content", content);
        });
        const formData2 = documentsFormData2;

        const config2 = {
          headers: { "content-type": "multipart/form-data" },
        };

        axios
          .post(url2, formData2, config2)
          .then((response) => {
            resolve();
          })
          .catch((error) => {
            resolve();
            console.log(error);
          });
      }),
    ]);

     // startReload();
     reloadModule(module, history);
     history.push("/module");
  };

  const onCancel = (e) => {
    e.preventDefault();
    history.push("/module");
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
              <Assignment
                className=""
                module={module}
                moduleEdit={moduleEdit}
                setModuleEdit={setModuleEdit}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="container margins">
              <Content
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
              <button type="submit" className="btn btn-success d-inline">
                Upload
              </button>
            </form>
            <form onSubmit={onCancel}>
              <button type="submit" className="btn btn-danger d-inline">
                Cancel
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
  toReloadModule: state.module.reloadModule,
  isAuthenticated: state.user.isAuthenticated,
  state: state,
});

export default connect(mapStateToProps, {
  instructorUpload,
  startReload,
  reloadModule,
  stopReload,
})(ModuleEdit);
