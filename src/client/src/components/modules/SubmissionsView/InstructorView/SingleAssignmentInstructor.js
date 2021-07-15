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
  grading,
  gradingSuccessful,
} from "../../../../actions/assignmentAction";

export const SingleAssignmentInstructor = ({
  user,
  assignment,
  ind,
  history,
  grading,
  gradingSuccessful,
}) => {
  const [assignmentEdit, setAssignmentEdit] = useState({
    _id: assignment._id,
    userid: assignment.userid._id,
    submitted_document: assignment.submitted_document,
    moduleId: assignment.moduleId._id,
    name: assignment.name,
    marked_document: assignment.marked_document
      ? assignment.marked_document
      : "",
    mark: assignment.mark ? assignment.mark : -1,
    status: assignment.status ? assignment.status : false,
    comments: assignment.comments ? assignment.comments : "",
    marked_document_file: "",
  });

  const [gradingEdit, setGradingEdit] = useState({
    gradingAssignment: false,
  });

  const { _id, marked_document_file, marked_document, mark, status, comments } =
    assignmentEdit;

  const { gradingAssignment } = gradingEdit;


  function handleNewFeedback(event) {
    setAssignmentEdit((prevState) => ({
      ...assignmentEdit,
      marked_document_file: event.target.files[0],
    }));
    console.log(event.target.files[0]);
    console.log(marked_document_file);
  }

  function handleClick(event) {
    setAssignmentEdit((prevState) => ({
      ...assignmentEdit,
      marked_document_file: "",
    }));
  }

  const onSubmitSubmission = async (e) => {
    e.preventDefault();

    setAssignmentEdit({
        status: true
    })

    await Promise.all([
      new Promise((resolve, reject) => {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...assignmentEdit,
          }),
        };

        fetch(
          `http://localhost:3001/assignment/edit/${_id}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => {
            //console.log("DATA handled",data)
            resolve();
          });
      }),

      new Promise((resolve, reject) => {
        const url = `http://localhost:3001/assignment/marked/${_id}`;

        let documentsFormData = new FormData();
        documentsFormData.append("MarkedDocument", marked_document_file);

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
        resolve();
      }),
    ]);

    window.location.reload();
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setGradingEdit({
      gradingAssignment: true,
    });
  };

  const onCancelGrading = (e) => {
    e.preventDefault();

    setGradingEdit({
      gradingAssignment: false,
    });
  };

  const onChange = (e) => {
    e.preventDefault();

    setAssignmentEdit({
      ...assignmentEdit,
      [e.target.name]: e.target.value,
    });
  };

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
                {getAssignmentURL(assignment.name).split("/").reverse()[0]
                  .length > 5
                  ? getAssignmentURL(assignment.name)
                      .split("/")
                      .reverse()[0]
                      .slice(0, 5) + "..."
                  : getAssignmentURL(assignment.name).split("/").reverse()[0]}
              </a>
            </div>

            <div className="document_single">
              <SvgDocument className="little-icon" />
              <a
                href={getAssignmentURL(assignment.submitted_document)}
                target="_blank"
              >
                {getAssignmentURL(assignment.submitted_document)
                  .split("/")
                  .reverse()[0].length > 5
                  ? getAssignmentURL(assignment.submitted_document)
                      .split("/")
                      .reverse()[0]
                      .slice(0, 5) + "..."
                  : getAssignmentURL(assignment.submitted_document)
                      .split("/")
                      .reverse()[0]}
              </a>
            </div>
          </div>

          {!gradingAssignment ? (
            <div className="d-flex justify-content-center mt-2">
              <form onSubmit={onSubmit}>
                <button type="submit" className="btn btn-success">
                  Grade
                </button>
              </form>
            </div>
          ) : (
            ""
          )}

          {gradingAssignment ? (
            <>
              <hr></hr>
              <div className="document_list mt-3">
                {marked_document_file ? (
                  <>
                    <div className="document_single">
                      <SvgDocument className="little-icon" />
                      <a
                        href={getAssignURL(marked_document_file)}
                        target="_blank"
                      >
                        {getAssignURL(marked_document_file)
                          .split("/")
                          .reverse()[0].length > 5
                          ? getAssignURL(marked_document_file)
                              .split("/")
                              .reverse()[0]
                              .slice(0, 5) + "..."
                          : getAssignURL(marked_document_file)
                              .split("/")
                              .reverse()[0]}
                      </a>
                      <SvgRedX
                        className="little-icon4"
                        onClick={handleClick}
                        ind={ind}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {marked_document ? (
                      <div className="document_single">
                        <SvgDocument className="little-icon" />
                        <a
                          href={getAssignmentURL(marked_document)}
                          target="_blank"
                        >
                          {getAssignmentURL(marked_document)
                            .split("/")
                            .reverse()[0].length > 5
                            ? getAssignmentURL(marked_document)
                                .split("/")
                                .reverse()[0]
                                .slice(0, 5) + "..."
                            : getAssignmentURL(marked_document)
                                .split("/")
                                .reverse()[0]}
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                )}
                <div class="image-upload">
                  <label for={`file-input ${ind}`}>
                    <SvgPlus className="little-icon plus" />
                  </label>

                  <input
                    id={`file-input ${ind}`}
                    type="file"
                    onChange={handleNewFeedback}
                  />
                </div>
              </div>

              <form className="mb-0" onSubmit={onSubmitSubmission}>
                <div className="mt-3">
                  <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-lg-2">
                      <label
                        htmlFor={ind}
                        className="mt-4 d-inline text-center"
                      >
                        <h3>Grade</h3>
                      </label>
                      <input
                        type="number"
                        id={ind}
                        name="mark"
                        className="form-control d-inline me-4"
                        placeholder="0-100"
                        value={mark !== -1 ? mark : ""}
                        onChange={onChange}
                      ></input>
                    </div>
                  </div>

                  <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-lg-8">
                      <label
                        htmlFor={ind}
                        className="mt-4 d-inline text-center"
                      >
                        <h3>Comments/Feedback</h3>
                      </label>
                      <textarea
                        type=""
                        id={ind}
                        name="comments"
                        className="form-control d-inline me-4"
                        placeholder="Feedback..."
                        value={comments}
                        onChange={onChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-success">
                      Grade
                    </button>
                  </div>
                </div>
              </form>

              <div className="d-flex justify-content-center pt-0 mt-0">
                <form id={ind} onSubmit={onCancelGrading}>
                  <label htmlFor={ind} />
                  <button
                    id={ind}
                    type="submit"
                    className="btn btn-danger text-center"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </>
          ) : (
            ""
          )}
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  createAssignment,
  createAssignmentSuccesful,
  grading,
  gradingSuccessful,
})(SingleAssignmentInstructor);
