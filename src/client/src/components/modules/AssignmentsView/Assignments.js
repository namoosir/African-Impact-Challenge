import SingleAssignment from "./SingleAssignment";
import PropTypes from "prop-types";

import { Component, useState, useEffect } from "react";

export const Assignments = ({ assignments }) => {

  function getDocumentURL(docName) {
    return `http://localhost:3001/getAssignment/${docName}`;
  }

  return (

      <div className="card">
        <div className="card-body">
          <h1>Assignments</h1>

          <div className="document_list">
            {assignments.map((assignment) => (
              <SingleAssignment assignment_url={getDocumentURL(assignment)} />
            ))}
          </div>
        </div>
      </div>
  );
};

Assignments.propTypes = {
  /**
   * This represents the URL of the document that will be seen
   */
  assignment_urls: PropTypes.array,
};

Assignments.defaultProps = {
  document_urls: ["463jd69d710fmn047204", "038bd6289jf0nv72904u2"],
};

export default Assignments;
