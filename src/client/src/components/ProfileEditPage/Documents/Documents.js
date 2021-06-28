import SingleDoc from './SingleDoc'
import PropTypes from 'prop-types';
import { ReactComponent as SvgPlus } from '../../../svgs/Plus.svg'
import banner from '../../../svgs/simple-blue.jpg'

export const Documents = ({user, userEdit, setUserEdit}) => {

    function handleNewFile(event){
        setUserEdit(prevState => ({
            userEdit: {
                ...prevState.userEdit,
                typeUser: {
                    ...prevState.userEdit.typeUser,
                    documents : [...prevState.userEdit.typeUser.documents, URL.createObjectURL(event.target.files[0])]
                }
            }
        }))

    }


    return (
        <div className="">
            <div className="card">
                <div className="card-body">
                    <h1>Documents</h1>

                    <div className="document_list"> 
                        {userEdit.userEdit.typeUser.documents.map((document_url) => (
                            <SingleDoc document_url={document_url} user={user} userEdit={userEdit} setUserEdit={setUserEdit}/>
                        ))}

                        <div class="image-upload">
                            
                            <label for="file-input">
                                <SvgPlus className="little-icon"/>
                            </label>

                            <input id="file-input" type="file" onChange={handleNewFile}/>
                        </div> 
                        
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
    user: PropTypes.object
};


export default Documents