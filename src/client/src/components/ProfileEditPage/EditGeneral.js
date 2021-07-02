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
            return `http://localhost:3001/profile/getImage/${user.id}`;
        } 
        return URL.createObjectURL(user.imageURL)

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
                        <input className="blue-section" id="expense-file" type="file" onChange={previewImage}/>
                    </div>
                    <form className="edit_profile_fields">
                        <label className="edit_profile_label">Name
                            <input className="input_field_short" type="text" defaultValue={user.name} onChange={handleChangeName}/>
                        </label>
                        <label className="edit_profile_label">Biography
                            <textarea className="input_field_big" type="text" defaultValue={user.biography} onChange={handleChangeBio}/>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditGeneral
