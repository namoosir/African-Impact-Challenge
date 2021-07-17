import SingleDoc from 'components/SingleDoc'

const Documents = () => {
    return (
        <div className="profile_documents">
            <h1>Documents</h1>
            <div className="document_list"> 
                <SingleDoc docName="Employees"/>
                <SingleDoc docName="Expenses"/>
            </div>
        </div>
    )
}

export default Documents
