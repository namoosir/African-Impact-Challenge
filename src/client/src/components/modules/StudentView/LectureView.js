import PropTypes from "prop-types";
import { ReactComponent as SvgDocument } from "../../../svgs/document_icon.svg";

import { useState, useEffect } from "react";
import { connect } from "react-redux";

import banner from "../../../svgs/simple-blue.jpg";

import { loadLecture } from "../../../actions/moduleAction";

export const LectureStudent = ({ user, module, lectures, history, loadLecture}) => {
  useEffect(() => {
    if (user) {
      loadLecture(module._id, history);
    }
  }, []);

  const getLectureURL = (doc) => {
    return `http://localhost:3001/getLecture/${doc}`;
  };

  return (
    <div className="justify-content-center">
      {user && user.typeOfUser === "Entrepreneur" ? (
        <div className="card">
          <div className="card-body">
            <h1>Lectures</h1>

            {lectures && Array.isArray(lectures)
              ? lectures.map((lecture) => (
                  <div className="document_list">
                    <div className="document_single">
                      <SvgDocument className="little-icon" />
                      <a href={getLectureURL(lecture)} target="_blank">
                        {getLectureURL(lecture).split("/").reverse()[0].length > 5
                          ? getLectureURL(lecture)
                              .split("/")
                              .reverse()[0]
                              .slice(0, 5) + "..."
                          : getLectureURL(lecture).split("/").reverse()[0]}
                      </a>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

LectureStudent.propTypes = {
  /**
   * This represents the URL of the document that will be seen
   */
};

const mapStateToProps = (state) => ({
  lectures: state.module.lectures,
});

export default connect(mapStateToProps, { loadLecture })(LectureStudent);
