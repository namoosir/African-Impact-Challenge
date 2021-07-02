import SingleDoc from './SingleDoc'
import PropTypes from 'prop-types';

export const Documents = ({documents}) => {
    console.log(typeof documents)

    function getDocumentURL(docName){
        return `http://localhost:3001/profile/getDocument/${docName}`;
    }

    return (

        <div className="container margins">
            <div className="card">
                <div className="card-body">
                    <h1>Documents</h1>

                    <div className="document_list"> 
                        {documents.map((document) => (
                            <SingleDoc document_url={getDocumentURL(document)}/>
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
    document_urls: PropTypes.array
};

Documents.defaultProps = {
    document_urls: ["/home/andy/Documents/1.txt","/home/andy/Documents/1.txt"]
};

export default Documents