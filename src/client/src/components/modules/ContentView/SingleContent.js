import { ReactComponent as SvgDocument } from '../../../svgs/document_icon.svg'
import PropTypes from 'prop-types';

export const SingleContent = ({content_url}) => {

    
    return (
        <div className="document_single">
            <SvgDocument className="little-icon"/>
            <a href={content_url} target="_blank"> {content_url.split('/').reverse()[0].length > 5 ? 
                                                        content_url.split('/').reverse()[0].slice(0,5) + '...' :
                                                        content_url.split('/').reverse()[0]}</a>
        </div>
    )
}



SingleContent.propTypes = {
    /**
     * This represents the URL of the document that will be seen
     */
    assignment_url: PropTypes.string,
};

SingleContent.defaultProps = {
    document_url: "/home/andy/Documents/1.txt"
};


export default SingleContent;