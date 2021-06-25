import React from 'react'

const EditGeneral = ({user}) => {
    return (
        <div className="edit_general">
            <div className ="edit_profile_img">
                <img className="profile_img" src={user.image}></img>
                <button className="edit_profile_btn btn btn-primary" type="button"></button>
            </div>
            <form>
                <label>Name
                    <input type="text" defaultValue={user.name}/>
                </label>
                <label>Biography
                    <input type="text" defaultValue={user.biography}/>
                </label>
            </form>
        </div>
    )
}

export default EditGeneral
