import React from 'react'
import EditGeneral from './EditGeneral'
import EditCompany from './EditCompany'
import { Component, useState, useEffect } from 'react'
import profilePage from '../stylesheets/ProfileEditPage/profilePage.css'
import { func } from 'prop-types'

const ProfileEditPage = ({user}) => {

    const [user2, setUser2] = useState({
        id: "60d9f8cc59b742bfa5157414",
        name: "Bo",
        email: "Will",
        username: "bwill",
        password: "fsdf",
        typeOfUser: "Instructor",
        biography: "Lorem djklakldsal",
        image: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        typeUser: {
          classes: ["B07", "CSCC01"],
        }
    });

    const [userEdit, setUserEdit] = useState({
        userEdit: user2
    });

    function handleUpdate(){
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: userEdit.userEdit,
          };
          
          fetch(`http://localhost:3001/profile/edit/${userEdit.userEdit.id}`, requestOptions)
              .then(response => response.json())

    }


    useEffect(() =>{
        console.log(userEdit)
    });


    return (
        <div className="profile_edit_page">

            <EditGeneral user={user2} userEdit={userEdit} setUserEdit={setUserEdit}/>

            {user2.typeOfUser == "Company" ? <EditCompany user={user2} userEdit={userEdit} setUserEdit={setUserEdit}/>:<h3></h3>}

            <button className="apply_btn btn btn-primary" onChange={handleUpdate}>Apply</button>

        </div>
    )
}

export default ProfileEditPage