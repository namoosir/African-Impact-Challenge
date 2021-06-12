import SingleDoc from 'components/Documents/SingleDoc'
import PropTypes from 'prop-types';
import 'css/main.css';

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


export default Documents