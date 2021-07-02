import {useEffect, useState} from 'react'

const EditGeneral = ({user, userEdit, setUserEdit}) => {

    function handleChangeName(event){
        setUserEdit(prevState => ({
            userEdit: {
                ...prevState.userEdit,
                name: event.target.value
            }
        }))
    }

    function handleChangeBio(event){
        setUserEdit(prevState => ({
            userEdit: {
                ...prevState.userEdit,
                biography: event.target.value
            }
        }))
    }

    function previewImage(event){
        setUserEdit(prevState => ({
            userEdit: {
                ...prevState.userEdit,
                imageFile: event.target.files[0]
            }
        }))
    }

    function getImageURL(user){

        if (user.imageFile === "NULL"){
            return user.image;
        } 
        return URL.createObjectURL(user.imageFile)

    }




    useEffect(() =>{
        console.log(userEdit)
    });
    
    return (
        <div className="container margins edit_general">
            <div className="card">
                <div className="card-body">
                    <div className ="edit_profile_img">
                        <img className="profile_img_profile_edit" src={getImageURL(userEdit.userEdit)}></img>
                        <h3>New Photo</h3>
                        <input className="form-control" id="expense-file" type="file" onChange={previewImage}/>
                    </div>
                    <form className="edit_profile_fields">
                        <label className="edit_profile_label">Name</label>
                            <input className="input_field_short form-control" type="text" defaultValue={user.name} onChange={handleChangeName}/>
                        <label className="edit_profile_label">Biography</label>
                            <textarea className="input_field_big form-control" type="text" defaultValue={user.biography} onChange={handleChangeBio}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditGeneral
