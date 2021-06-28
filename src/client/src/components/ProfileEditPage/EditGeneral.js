import {useEffect} from 'react'

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

    useEffect(() =>{
        console.log(userEdit)
    });

    return (
        <div className="edit_general">
            <div className ="edit_profile_img">
                <img className="profile_img_profile_edit" src={user.image}></img>
                <button className="edit_profile_btn btn btn-primary" type="button">New Photo</button>
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
    )
}

export default EditGeneral
