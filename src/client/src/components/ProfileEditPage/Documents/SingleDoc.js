import { ReactComponent as SvgDocument } from '../../../svgs/document_icon.svg'
import { ReactComponent as SvgRedX } from '../../../svgs/redX.svg'

import PropTypes from 'prop-types';

export const SingleDoc = ({document_url, user}) => {
    return (
        <div className="document_single">
            <SvgDocument/> <br/>
            <a href={document_url} target="_blank">{document_url.split('/').reverse()[0]}</a>
            <SvgRedX/>
        </div>
    )
}



SingleDoc.propTypes = {
    /**
     * This represents the URL of the document that will be seen
     */
    document_url: PropTypes.string,
};

SingleDoc.defaultProps = {
    document_url: "/home/andy/Documents/1.txt"
};


export default SingleDoc