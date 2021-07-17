import PropTypes from "prop-types";
import { ReactComponent as SvgDocument } from "../../../svgs/document_icon.svg";

import { useState, useEffect } from "react";
import { connect } from "react-redux";

import banner from "../../../svgs/simple-blue.jpg";

import { loadContent } from "../../../actions/moduleAction";
import Content from "../ContentView/Content";

export const ContentStudent = ({ user, module, content, history, loadContent }) => {
  useEffect(() => {
    if (user) {
      loadContent(module._id, history);
    }
  }, []);

  const getContentURL = (doc) => {
    return `http://localhost:3001/getContent/${doc}`;
  };

  return (
    <div className="justify-content-center">
      {user && user.typeOfUser === "Entrepreneur" ? (
        <div className="card">
          <div className="card-body">
            <h2>Content</h2>

            {content && Array.isArray(content)
              ? content.map((cont) => (
                  <div className="document_list">
                    <div className="document_single">
                      <SvgDocument className="little-icon" />
                      <a href={getContentURL(cont)} target="_blank">
                        {getContentURL(cont).split("/").reverse()[0].length > 5
                          ? getContentURL(cont)
                              .split("/")
                              .reverse()[0]
                              .slice(0, 5) + "..."
                          : getContentURL(cont).split("/").reverse()[0]}
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

ContentStudent.propTypes = {
  /**
   * This represents the URL of the document that will be seen
   */
};

const mapStateToProps = (state) => ({
  content: state.module.content,
});

export default connect(mapStateToProps, { loadContent })(ContentStudent);
