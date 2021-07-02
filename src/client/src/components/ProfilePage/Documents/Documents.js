import SingleDoc from './SingleDoc'
import PropTypes from 'prop-types';

import { Component, useState, useEffect } from 'react'






export const Documents = ({documents}) => {

    
    console.log("RHHS",typeof documents)
    console.log("RHHS",typeof documents)


    useEffect(() => {
        console.log("TSISDOC",documents);
      }, [])
    
    

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
    document_urls: ["463jd69d710fmn047204","038bd6289jf0nv72904u2"]
};

export default Documents