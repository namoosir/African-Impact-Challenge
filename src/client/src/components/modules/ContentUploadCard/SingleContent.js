import { ReactComponent as SvgDocument } from "../../../svgs/document_icon.svg";
import { ReactComponent as SvgRedX } from "../../../svgs/redX.svg";

import PropTypes from "prop-types";

export const SingleContent = ({
  content,
  user,
  type,
  moduleEdit,
  setModuleEdit,
}) => {

    function getDocumentURL2(document){
        if(type ==="File"){
            return URL.createObjectURL(document);
        }
        return `http://localhost:3001/getContent/${document}`;
    }

  function handleClick2(event) {
    setModuleEdit((prevState) => ({
      moduleEdit: {
        ...prevState.moduleEdit,

        content: [
          ...prevState.moduleEdit.content.filter(
            (contentName) => contentName !== content
          ),
        ],
        contentFiles: [
          ...prevState.moduleEdit.contentFiles.filter(
            (contentFile) => contentFile !== content
          ),
        ],
      },
    }));
  }

  return (
    <div className="document_single">
      <SvgDocument className="little-icon" />
      <a href={getDocumentURL2(content)} target="_blank">
        {getDocumentURL2(content).split("/").reverse()[0].length > 5
          ? getDocumentURL2(content).split("/").reverse()[0].slice(0, 5) + "..."
          : getDocumentURL2(content).split("/").reverse()[0]}
      </a>

      <SvgRedX className="little-icon" onClick={handleClick2} />
    </div>
  );
};

SingleContent.propTypes = {
  /**
   * This represents the URL of the document that will be seen
   */
  content: PropTypes.string,
};

SingleContent.defaultProps = {
  content: "/home/andy/Documents/1.mp4",
};

export default SingleContent;
