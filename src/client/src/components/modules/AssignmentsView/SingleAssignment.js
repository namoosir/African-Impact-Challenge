import { ReactComponent as SvgDocument } from '../../../svgs/document_icon.svg'
import PropTypes from 'prop-types';

export const SingleAssignment = ({assignment_url}) => {

    
    return (
        <div className="document_single">
            <SvgDocument className="little-icon"/>
            <a href={assignment_url} target="_blank"> {assignment_url.split('/').reverse()[0].length > 5 ? 
                                                        assignment_url.split('/').reverse()[0].slice(0,5) + '...' :
                                                        assignment_url.split('/').reverse()[0]}</a>
        </div>
    )
}



SingleAssignment.propTypes = {
    /**
     * This represents the URL of the document that will be seen
     */
    assignment_url: PropTypes.string,
};

SingleAssignment.defaultProps = {
    document_url: "/home/andy/Documents/1.txt"
};


export default SingleAssignment