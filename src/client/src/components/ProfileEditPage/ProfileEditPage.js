import React from 'react'
import EditGeneral from './EditGeneral'
import EditCompany from './EditCompany'
import { Component, useState, useEffect } from 'react'
import profilePage from '../stylesheets/ProfileEditPage/profilePage.css'
import { func } from 'prop-types'
import axios from "axios";

const ProfileEditPage = ({user}) => {

    const [user2, setUser2] = useState({
        "id": "60d9f89d9bafe0bd62b7187f",
        "image": "yoda.jpeg",
        "biography": "y is coolguy and I have a lot of money",
        "name": " hs",
        "username": "arsm",
        "email": "muse@lhars",
        "password": "i123",
        "typeOfUser": "Instructor",
        "typeUser": {
            "classes": [
                "M"
            ],
            "_id": "60d9f89d9bafe0bd62b7187e"
        },
        "imageURL": "http://localhost:3001/profile/getimage/60d9f89d9bafe0bd62b7187f",
        "imageFormData": "None"
    });

    const [userEdit, setUserEdit] = useState({
        userEdit: user2
    });

    function handleUpdate(){
        console.log('handle');
        console.log(userEdit.userEdit);

        //basic update request
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userEdit.userEdit),
          };
          
          fetch(`http://localhost:3001/profile/edit/${userEdit.userEdit.id}`, requestOptions)
              .then(response => response.json())
              .then(data => console.log(data))



        // image update request
        /*
        const requestOptions2 = {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: userEdit.userEdit.imageFormData,
          };
          
          fetch(`http://localhost:3001/profile/editImage/${userEdit.userEdit.id}`, requestOptions2)
              .then(response => response.json())
              .then(data => console.log(data))
          

        */  

            console.log("formata?", userEdit.userEdit.imageFormData)
            const url = `http://localhost:3001/profile/editImage/${userEdit.userEdit.id}`

            let imageFormData = new FormData();
            imageFormData.append("imageURL", userEdit.userEdit.imageFormData);
            const formData = imageFormData

            console.log("format2?", formData)
            const config = {     
                headers: { 'content-type': 'multipart/form-data' }
            }

            axios.post(url, formData, config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

    }


    useEffect(() =>{
        console.log(userEdit)
    });


    return (
        <div className="profile_edit_page">
            <EditGeneral user={user2} userEdit={userEdit} setUserEdit={setUserEdit}/>

            {user2.typeOfUser == "Company" ? <EditCompany user={user2} userEdit={userEdit} setUserEdit={setUserEdit}/>:<h3></h3>}

            <button className="apply_btn btn btn-primary" onClick={handleUpdate}>Apply</button>

        </div>
    )
}

export default ProfileEditPage
