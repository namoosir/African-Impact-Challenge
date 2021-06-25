import React from 'react'
import EditGeneral from './EditGeneral'
import EditCompany from './EditCompany'
import { Component, useState } from 'react'


const ProfileEditPage = () => {

    const [user2, setUser2] = useState({
        id: "4",
        name: "Bob",
        email: "Will",
        username: "bwill",
        password: "fsdf",
        typeOfUser: "Company",
        biography: "Lorem djklakldsal",
        image: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        typeUser: {
          classes: ["B07", "CSCC01"],
          documents: ["fjkd", "ndfksd"]
        }
    });


    return (
        <div className="profile_edit_page">
            <EditGeneral user={user2}/>
            {user2.typeOfUser == "Company" ? <EditCompany user={user2}/>:<h3></h3>}
            <button className="apply_btn btn btn-primary">Apply</button>

        </div>
    )
}

export default ProfileEditPage
