import { ReactComponent as SvgDocument } from '../../../svgs/document_icon.svg'
import PropTypes from 'prop-types';

export const SingleVideo = ({video_url}) => {

    
    return (
        <div className="document_single">
            <SvgDocument className="little-icon"/>
            <a href={video_url} target="_blank"> {video_url.split('*')[0].length > 5 ? 
                                                        video_url.split('*')[0].slice(0,5) + '...' :
                                                        video_url.split('*')[0]}</a>
        </div>
    )
}



SingleVideo.propTypes = {
    /**
     * This represents the URL of the document that will be seen
     */
    assignment_url: PropTypes.string,
};

SingleVideo.defaultProps = {
    document_url: "/home/andy/Documents/1.txt"
};


export default SingleVideo