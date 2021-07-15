import PropTypes from "prop-types";
import axios from "axios";
import { ReactComponent as SvgPlus } from "../../../../svgs/Plus.svg";
import { ReactComponent as SvgDocument } from "../../../../svgs/document_icon.svg";
import { ReactComponent as SvgRedX1 } from "../../../../svgs/redX.svg";
import { ReactComponent as SvgRedX } from "../../../../svgs/redX.svg";

import { useState, useEffect } from "react";
import { connect } from "react-redux";

import banner from "../../../../svgs/simple-blue.jpg";

import {
  createAssignment,
  createAssignmentSuccesful,
} from "../../../../actions/assignmentAction";

export const SingleAssignmentInstructor = ({ user, assignment, ind, history }) => {
  const [assignmentEdit, setAssignmentEdit] = useState({
    _id: assignment.id,
    userid: assignment.userid._id,
    submitted_document: assignment.submitted_document,
    moduleId: assignment.moduleId._id,
    name: assignment.name,
    marked_document: "",
    mark: -1,
    status: false,
    comments: "",
    marked_document_file: "",
    markFile: -1,
    statusFile: false,
    commentFiles: "",
  });

  const { _id, marked_document_file, markFile, statusFile, commentFiles } =
    assignmentEdit;

  function handleNewAssignment(event) {
    setAssignmentEdit((prevState) => ({
      ...assignmentEdit,
      submitted_document_file: event.target.files[0],
      submitted_document: event.target.files[0],
    }));
  }

  function handleClick(event) {
    setAssignmentEdit((prevState) => ({
      ...assignmentEdit,
      submitted_document_file: "",
      submitted_document: "",
    }));
  }

//   const onSubmitStud = async (e) => {
//     e.preventDefault();

//     await Promise.all([
//       new Promise((resolve, reject) => {
//         const requestOptions = {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             ...assignmentEdit,
//           }),
//         };

//         fetch(`http://localhost:3001/assignment/edit/${id}`, requestOptions)
//           .then((response) => response.json())
//           .then((data) => {
//             //console.log("DATA handled",data)
//             resolve();
//           });
//       }),

//       new Promise((resolve, reject) => {
//         const url = `http://localhost:3001/assignment/submitted/${id}`;

//         let documentsFormData = new FormData();
//         documentsFormData.append("SubmittedDocument", submitted_document);

//         const formData = documentsFormData;

//         const config = {
//           headers: { "content-type": "multipart/form-data" },
//         };

//         axios
//           .post(url, formData, config)
//           .then((response) => {
//             resolve();
//           })
//           .catch((error) => {
//             resolve();
//             console.log(error);
//           });
//         resolve();
//       }),
//     ]);

//     createAssignmentSuccesful();
//     window.location.reload();
//   };

  const onSubmit = (e) => {
      e.preventDefault();
  }

  function getAssignmentURL(docName) {
    return `http://localhost:3001/getAssignment/${docName}`;
  }

  function getAssignURL(doc) {
    return URL.createObjectURL(doc);
  }

  return (
    <div className="d-block">
      <div className="card">
        <div className="card-body">
          <h2>
            {assignment && user
              ? assignment.name.substr(0, assignment.name.indexOf("*")) +
                " - " +
                assignment.userid.name
              : ""}
          </h2>

          <div className="document_list">
            <div className="document_single">
              <SvgDocument className="little-icon" />
              <a href={getAssignmentURL(assignment.name)} target="_blank">
                {getAssignmentURL(assignment.name).split("/").reverse()[0].length > 5
                  ? getAssignmentURL(assignment.name)
                      .split("/")
                      .reverse()[0]
                      .slice(0, 5) + "..."
                  : getAssignmentURL(assignment.name).split("/").reverse()[0]}
              </a>
            </div>

            <div className="document_single">
              <SvgDocument className="little-icon" />
              <a href={getAssignmentURL(assignment.submitted_document)} target="_blank">
                {getAssignmentURL(assignment.submitted_document).split("/").reverse()[0].length > 5
                  ? getAssignmentURL(assignment.submitted_document)
                      .split("/")
                      .reverse()[0]
                      .slice(0, 5) + "..."
                  : getAssignmentURL(assignment.submitted_document).split("/").reverse()[0]}
              </a>
            </div>

            

            {/* <div class="image-upload">
              <label for={`file-input ${ind}`}>
                <SvgPlus className="little-icon plus" />
              </label>

              <input
                id={`file-input ${ind}`}
                key={ind}
                type="file"
                onChange={handleNewAssignment}
              />
            </div> */}
          </div>
          <div className="d-flex justify-content-center mt-2">
            <form onSubmit={onSubmit}>
              <button type="submit" className="btn btn-success">
                Grade
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleAssignmentInstructor.propTypes = {
  /**
   * This represents the URL of the document that will be seen
   */
};

export default connect(null, { createAssignment, createAssignmentSuccesful })(
  SingleAssignmentInstructor
);
