import SingleContent from "./SingleContent";
import PropTypes from "prop-types";

import { Component, useState, useEffect } from "react";

export const Content = ({ content }) => {

  function getDocumentURL(docName) {
    return `http://localhost:3001/getContent/${docName}`;
  }

  return (

      <div className="card">
        <div className="card-body">
          <h1>Content</h1>

          <div className="document_list">
            {content.map((content) => (
              <SingleContent content_url={getDocumentURL(content)} />
            ))}
          </div>
        </div>
      </div>
  );
};

Content.propTypes = {
  /**
   * This represents the URL of the document that will be seen
   */
  assignment_urls: PropTypes.array,
};

Content.defaultProps = {
  document_urls: ["463jd69d710fmn047204", "038bd6289jf0nv72904u2"],
};

export default Content;
