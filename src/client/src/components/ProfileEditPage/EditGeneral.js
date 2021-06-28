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
                image: URL.createObjectURL(event.target.files[0])
            }
        }))
    }




    useEffect(() =>{
        console.log(userEdit)
    });
    
    return (
        <div className="container edit_general">
            <div className="card">
                <div className="card-body">
                    <div className ="edit_profile_img">
                        <img className="profile_img_profile_edit" src={userEdit.userEdit.image}></img>
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
