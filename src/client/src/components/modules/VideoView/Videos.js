import SingleVideo from "./SingleVideo";
import PropTypes from "prop-types";

import { Component, useState, useEffect } from "react";

export const Videos = ({ videos }) => {

  function getDocumentURL3(docName) {
    return `http://localhost:3001/getLecture/${docName}`;
  }

  return (

      <div className="card">
        <div className="card-body">
          <h1>Lectures</h1>

          <div className="document_list">
            {videos.map((lecture) => (
              <SingleVideo video_url={getDocumentURL3(lecture)} />
            ))}
          </div>
        </div>
      </div>
  );
};

Videos.propTypes = {
  /**
   * This represents the URL of the document that will be seen
   */
  assignment_urls: PropTypes.array,
};

Videos.defaultProps = {
  document_urls: ["463jd69d710fmn047204", "038bd6289jf0nv72904u2"],
};

export default Videos;
