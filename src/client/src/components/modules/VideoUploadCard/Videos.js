import SingleDoc, { SingleVideo } from './SingleVideo'
import PropTypes from 'prop-types';
import { ReactComponent as SvgPlus } from '../../../svgs/Plus.svg'
import banner from '../../../svgs/simple-blue.jpg'

export const Videos = ({module, moduleEdit, setModuleEdit}) => {

    //set moduleURL and moduleFileData using Redux

    function handleNewFile(event){
         setModuleEdit(prevState => ({
             moduleEdit: {
                 ...prevState.moduelEdit,
                moduleURL : [...prevState.userEdit.typeUser.documents, URL.createObjectURL(event.target.files[0])],
                moduleFileData : [...prevState.moduleFileData, event.target.files[0]]
            }
        }))

    }


    return (
        <div className="">
            <div className="card">
                <div className="card-body">
                    <h1>Videos</h1>

                    <div className="document_list"> 
                        {moduleEdit.moduleEdit.content.map((video_url) => (
                            <SingleVideo video_url={video_url} module={module} moduleEdit={moduleEdit} setModuleEdit={setModuleEdit}/>
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

Videos.propTypes = {
    /**
     * This represents the URL of the document that will be seen
     */
   
};


export default Videos