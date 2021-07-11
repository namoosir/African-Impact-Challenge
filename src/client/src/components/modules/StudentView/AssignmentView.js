import PropTypes from "prop-types";
import { ReactComponent as SvgPlus } from "../../../svgs/Plus.svg";
import { ReactComponent as SvgDocument } from "../../../svgs/document_icon.svg";

import banner from "../../../svgs/simple-blue.jpg";

export const AssignmentStudent = ({
  assignment,
  moduleEdit,
  setModuleEdit,
}) => {
  function handleNewFile(event) {
    setModuleEdit((prevState) => ({
      moduleEdit: {
        ...prevState.moduleEdit,
        assignmentFiles: [
          ...prevState.moduleEdit.assignmentFiles,
          event.target.files[0],
        ],
      },
    }));
  }

  function getDocumentURL3(docName) {
    return `http://localhost:3001/getAssignment/${docName}`;
  }

  return (
    <div className="">
      {}
      <div className="card">
        <div className="card-body">
          <h1>{assignment}</h1>

          <div className="document_list">
            <div className="document_single">
              <SvgDocument className="little-icon" />
              <a href={getDocumentURL3(assignment)} target="_blank">
                {getDocumentURL3(assignment).split("/").reverse()[0].length > 5
                  ? getDocumentURL3(assignment)
                      .split("/")
                      .reverse()[0]
                      .slice(0, 5) + "..."
                  : getDocumentURL3(assignment).split("/").reverse()[0]}
              </a>
            </div>

            <div class="image-upload">
              <label for="file-input">
                <SvgPlus className="little-icon plus" />
              </label>

              <input id="file-input" type="file" onChange={handleNewFile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AssignmentStudent.propTypes = {
  /**
   * This represents the URL of the document that will be seen
   */
};

export default AssignmentStudent;