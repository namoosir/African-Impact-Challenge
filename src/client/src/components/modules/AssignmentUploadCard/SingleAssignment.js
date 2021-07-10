import { ReactComponent as SvgDocument } from "../../../svgs/document_icon.svg";
import { ReactComponent as SvgRedX } from "../../../svgs/redX.svg";

import PropTypes from "prop-types";

export const SingleAssignment = ({
  assignment,
  user,
  type,
  moduleEdit,
  setModuleEdit,
}) => {

    function getDocumentURL(document){
        if(type ==="File"){
            return URL.createObjectURL(document);
        }
        return `http://localhost:3001/getAssignment/${document}`;
    }

  function handleClick(event) {
    setModuleEdit((prevState) => ({
      moduleEdit: {
        ...prevState.moduleEdit,

        assignments: [
          ...prevState.moduleEdit.assignments.filter(
            (assignmentName) => assignmentName !== assignment
          ),
        ],
        assignmentFiles: [
          ...prevState.moduleEdit.assignmentFiles.filter(
            (assignmentFile) => assignmentFile !== assignment
          ),
        ],
      },
    }));
  }

  return (
    <div className="document_single">
      <SvgDocument className="little-icon" />
      <a href={getDocumentURL(assignment)} target="_blank">
        {getDocumentURL(assignment).split("/").reverse()[0].length > 5
          ? getDocumentURL(assignment).split("/").reverse()[0].slice(0, 5) + "..."
          : getDocumentURL(assignment).split("/").reverse()[0]}
      </a>

      <SvgRedX className="little-icon" onClick={handleClick} />
    </div>
  );
};

SingleAssignment.propTypes = {
  /**
   * This represents the URL of the document that will be seen
   */
  assignment_url: PropTypes.string,
};

SingleAssignment.defaultProps = {
  assignment_url: "/home/andy/Documents/1.mp4",
};

export default SingleAssignment;
