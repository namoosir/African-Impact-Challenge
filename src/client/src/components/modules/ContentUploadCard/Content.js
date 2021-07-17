import { SingleContent } from "./SingleContent";
import PropTypes from "prop-types";
import { ReactComponent as SvgPlus } from "../../../svgs/Plus.svg";
import banner from "../../../svgs/simple-blue.jpg";

export const Content = ({ module, moduleEdit, setModuleEdit }) => {

  function handleNewFile2(event) {
    setModuleEdit((prevState) => ({
      moduleEdit: {
        ...prevState.moduleEdit,
        contentFiles: [
          ...prevState.moduleEdit.contentFiles,
          event.target.files[0],
        ],
      },
    }));
  }

  function getDocumentURL2(docName) {
    return `http://localhost:3001/getContent/${docName}`;
  }

  return (
    <div className="">
      <div className="card">
        <div className="card-body">
          <h1>Content</h1>

          <div className="document_list">
        
          {moduleEdit.moduleEdit.content.map((content) => (
            <>
              <SingleContent
                content={content}
                module={module}
                moduleEdit={moduleEdit}
                type="Name"
                setModuleEdit={setModuleEdit}
              />
              </>
            ))}
            {moduleEdit.moduleEdit.contentFiles.map((contentFile) => (
              <>
              <SingleContent
                content={contentFile}
                module={module}
                moduleEdit={moduleEdit}
                type="File"
                setModuleEdit={setModuleEdit}
              />
              </>
            ))}

            <div class="image-upload">
              <label for="file-input2">
                <SvgPlus className="little-icon plus" />
              </label>
              <input id="file-input2" type="file" onChange={handleNewFile2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  /**
   * This represents the URL of the document that will be seen
   */
};

export default Content;
