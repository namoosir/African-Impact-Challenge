import SingleVideo from "./SingleVideo";
import PropTypes from "prop-types";
import { ReactComponent as SvgPlus } from "../../../svgs/Plus.svg";
import banner from "../../../svgs/simple-blue.jpg";

export const Videos = ({ module, moduleEdit, setModuleEdit }) => {

  function handleNewFile3(event) {
    setModuleEdit((prevState) => ({
      moduleEdit: {
        ...prevState.moduleEdit,
        lectureFiles: [
          ...prevState.moduleEdit.lectureFiles,
          event.target.files[0],
        ],
      },
    }));
  }

  function getDocumentURL3(docName) {
    return `http://localhost:3001/getLecture/${docName}`;
  }

  return (
    <div className="">
      <div className="card">
        <div className="card-body">
          <h1>Lectures</h1>

          <div className="document_list">
          {moduleEdit.moduleEdit.lectures.map((lecture) => (
            <>
              <SingleVideo
                lecture={lecture}
                module={module}
                moduleEdit={moduleEdit}
                type="Name"
                setModuleEdit={setModuleEdit}
              />
              </>
            ))}
            {moduleEdit.moduleEdit.lectureFiles.map((lectureFile) => (
              <>
              <SingleVideo
                lecture={lectureFile}
                module={module}
                moduleEdit={moduleEdit}
                type="File"
                setModuleEdit={setModuleEdit}
              />
              </>
            ))}

            <div class="image-upload">
              <label for="file-input3">
                <SvgPlus className="little-icon plus" />
              </label>

              <input id="file-input3" type="file" onChange={handleNewFile3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Videos.propTypes = {
  /**
   * This represents the URL of the document that will be seen
   */
};

export default Videos;