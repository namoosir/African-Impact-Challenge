import SingleDoc from './SingleDoc'
import PropTypes from 'prop-types';

export const Documents = ({user}) => {
    return (

        <div className="container">
            <div className="card">
                <div className="card-body profile_documents">
                    <h1>Documents</h1>

                    <div className="document_list"> 
                        {user.typeUser.documents.map((document_url) => (
                            <SingleDoc document_url={document_url} user={user}/>
                        ))}
                    </div>

                    <button className="add_documents">Add Docs</button>
                </div>
            </div>
        </div>
    )
}

Documents.propTypes = {
    /**
     * This represents the URL of the document that will be seen
     */
    user: PropTypes.object
};


export default Documents