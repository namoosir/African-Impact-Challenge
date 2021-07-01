import SingleDoc, { SingleAssignment } from './SingleAssignment'
import PropTypes from 'prop-types';
import { ReactComponent as SvgPlus } from '../../../svgs/Plus.svg'
import banner from '../../../svgs/simple-blue.jpg'

export const Assignment = ({module, moduleEdit, setModuleEdit}) => {

    function handleNewFile(event){
        // setUserEdit(prevState => ({
        //     userEdit: {
        //         ...prevState.userEdit,
        //         typeUser: {
        //             ...prevState.userEdit.typeUser,
        //             documents : [...prevState.userEdit.typeUser.documents, URL.createObjectURL(event.target.files[0])],
        //             documentsNewFormData : [...prevState.userEdit.typeUser.documentsNewFormData, event.target.files[0]]
        //         }
        //     }
        // }))

    }


    return (
        <div className="">
            <div className="card">
                <div className="card-body">
                    <h1>Assignment</h1>

                    <div className="document_list"> 
                        {moduleEdit.moduleEdit.assignments.map((assignment_url) => (
                            <SingleAssignment assignment_url={assignment_url} module={module} moduleEdit={moduleEdit} setModuleEdit={setModuleEdit}/>
                        ))}

                        <div class="image-upload">
                            
                            <label for="file-input">
                                <SvgPlus className="little-icon plus"/>
                            </label>

                            <input id="file-input" type="file" onChange={handleNewFile}/>
                        </div> 
                        
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

Assignment.propTypes = {
    /**
     * This represents the URL of the document that will be seen
     */
    user: PropTypes.object
};


export default Assignment