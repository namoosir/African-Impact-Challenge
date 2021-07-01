import { ReactComponent as SvgDocument } from '../../../svgs/document_icon.svg'
import { ReactComponent as SvgRedX } from '../../../svgs/redX.svg'

import PropTypes from 'prop-types';

export const SingleVideo = ({video_url, user, userEdit, setUserEdit}) => {


    function handleClick(event){
    //     setUserEdit(prevState => ({
    //         userEdit: {
    //             ...prevState.userEdit,
    //             typeUser: {
    //                 ...prevState.userEdit.typeUser,
    //                 documents : [...prevState.userEdit.typeUser.documents.filter((document) => document !== document_url)]
    //             }
    //         }
    //     }))
        
    }

    return (
        <div className="document_single">
                <SvgDocument className="little-icon" />
                <a href={video_url} target="_blank"> {video_url.split('/').reverse()[0].length > 5 ? 
                                                        video_url.split('/').reverse()[0].slice(0,5) + '...' :
                                                        video_url.split('/').reverse()[0]}</a>
                
                <SvgRedX className="little-icon" onClick={handleClick}/>
                          
        </div>
    )
}



SingleDoc.propTypes = {
    /**
     * This represents the URL of the document that will be seen
     */
    video_url: PropTypes.string,
};

SingleDoc.defaultProps = {
    video_url: "/home/andy/Documents/1.mp4"
};


export default SingleVideo