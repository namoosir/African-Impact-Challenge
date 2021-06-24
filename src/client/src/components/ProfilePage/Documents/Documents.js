import SingleDoc from './SingleDoc'
import PropTypes from 'prop-types';

export const Documents = ({document_urls}) => {
    console.log(typeof document_urls)
    return (

        <div className="container">
            <div className="card">
                <div className="card-body profile_documents">
                    <h1>Documents</h1>

                    <div className="document_list"> 
                        {document_urls.map((document_url) => (
                            <SingleDoc document_url={document_url}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

Documents.propTypes = {
    /**
     * This represents the URL of the document that will be seen
     */
    document_urls: PropTypes.object
};

Documents.defaultProps = {
    document_urls: ["/home/andy/Documents/1.txt","/home/andy/Documents/1.txt"]
};

export default Documents