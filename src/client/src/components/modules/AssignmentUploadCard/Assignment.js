import SingleDoc, { SingleAssignment } from './SingleAssignment'
import PropTypes from 'prop-types';
import { ReactComponent as SvgPlus } from '../../../svgs/Plus.svg'
import banner from '../../../svgs/simple-blue.jpg'

export const Assignment = ({module, moduleEdit, setModuleEdit}) => {

    function handleNewFile(event){
        setModuleEdit(prevState => ({
            moduleEdit: {
                 ...prevState.moduleEdit,
                moduleURL : [...prevState.moduleURL, URL.createObjectURL(event.target.files[0])],
                moduleFileData : [...prevState.moduleFileData, event.target.files[0]]
            }
        }))
    }

    return (
        <div className="">
            <div className="card">
                <div className="card-body">
                    <h1>Assignments</h1>

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
    
};


export default Assignment