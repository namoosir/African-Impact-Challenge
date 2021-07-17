import SingleDoc, { SingleAssignment } from "./SingleAssignment";
import PropTypes from "prop-types";
import { ReactComponent as SvgPlus } from "../../../svgs/Plus.svg";
import banner from "../../../svgs/simple-blue.jpg";

export const Assignment = ({ module, moduleEdit, setModuleEdit }) => {

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

  function getDocumentURL(docName) {
    return `http://localhost:3001/getAssignment/${docName}`;
  }

  return (
    <div className="">
      <div className="card">
        <div className="card-body">
          <h1>Assignments</h1>

          <div className="document_list">
          {moduleEdit.moduleEdit.assignments.map((assignment) => (
            <>
              <SingleAssignment
                assignment={assignment}
                module={module}
                moduleEdit={moduleEdit}
                type="Name"
                setModuleEdit={setModuleEdit}
              />
              </>
            ))}
            {moduleEdit.moduleEdit.assignmentFiles.map((assignmentFile) => (
              <>
              <SingleAssignment
                assignment={assignmentFile}
                module={module}
                moduleEdit={moduleEdit}
                type="File"
                setModuleEdit={setModuleEdit}
              />
              </>
            ))}

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

Assignment.propTypes = {
  /**
   * This represents the URL of the document that will be seen
   */
};

export default Assignment;
