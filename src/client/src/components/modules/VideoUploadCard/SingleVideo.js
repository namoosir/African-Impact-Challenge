import { ReactComponent as SvgDocument } from "../../../svgs/document_icon.svg";
import { ReactComponent as SvgRedX3 } from "../../../svgs/redX.svg";

import PropTypes from "prop-types";

export const SingleVideo = ({
  lecture,
  user,
  type,
  moduleEdit,
  setModuleEdit,
}) => {

    function getDocumentURL3(document){
        if(type ==="File"){
            return URL.createObjectURL(document);
        }
        return `http://localhost:3001/getLecture/${document}`;
    }

  function handleClick3(event) {
    setModuleEdit((prevState) => ({
      moduleEdit: {
        ...prevState.moduleEdit,

        lectures: [
          ...prevState.moduleEdit.lectures.filter(
            (lectureName) => lectureName !== lecture
          ),
        ],
        lectureFiles: [
          ...prevState.moduleEdit.lectureFiles.filter(
            (lectureFile) => lectureFile !== lecture
          ),
        ],
      },
    }));
  }

  return (
    <div className="document_single">
      <SvgDocument className="little-icon" />
      <a href={getDocumentURL3(lecture)} target="_blank">
        {getDocumentURL3(lecture).split("*")[0].length > 5
          ? getDocumentURL3(lecture).split("*")[0].slice(0, 5) + "..."
          : getDocumentURL3(lecture).split("*")[0]}
      </a>

      <SvgRedX3 className="little-icon3" onClick={handleClick3} />
    </div>
  );
};

SingleVideo.propTypes = {
  /**
   * This represents the URL of the document that will be seen
   */
  assignment_url: PropTypes.string,
};

SingleVideo.defaultProps = {
  assignment_url: "/home/andy/Documents/1.mp4",
};

export default SingleVideo;