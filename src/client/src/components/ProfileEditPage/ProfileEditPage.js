import React from 'react'
import EditGeneral from './EditGeneral'
import EditCompany from './EditCompany'
import { Component, useState, useEffect } from 'react'
import profilePage from '../stylesheets/ProfileEditPage/profilePage.css'
import { func } from 'prop-types'
import axios from "axios";
import {connect} from "react-redux"

const ProfileEditPage = ({user, isAuthenticated, history}) => {

    const [user2, setUser2] = useState({
        "id": "60dbc77aeda7da46a1baa945",
        "image": "5ef7c4986f5bab2e3b01580989de5ba8",
        "biography": "y is coolguy and I have a lot of money",
        "name": " hs",
        "username": "arsm",
        "email": "muse@lhars",
        "password": "i123",
        "typeOfUser": "Company",
        "typeUser": {
            "documents":[
                "<nameofDoc1>",
                "<nameofDoc2>"
            ],
            "documentsDis":[
                "http://localhost:3001/profile/getDoc/<nameofDoc1>"
            ],
            "documentsNewFormData":[],
            "_id": "60dbc77aeda7da46a1baa944"
        },
        "imageURL": "http://localhost:3001/profile/getimage/60dbc77aeda7da46a1baa945",
        "imageFormData": "None"
    });

    
    useEffect(() => {
        if (!isAuthenticated) {
          history.push('/login');
        }
      }, [isAuthenticated])

    const [userEdit, setUserEdit] = useState({
        userEdit: user
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


            if(userEdit.userEdit.imageFormData !== "None") {
                const url = `http://localhost:3001/profile/editImage/${userEdit.userEdit.id}`

                let imageFormData = new FormData();
                imageFormData.append("imageURL", userEdit.userEdit.imageFormData);
                const formData = imageFormData

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

            }  else{
                console.log("NOFORMDATA")
            }       
            
            
            
            
            const url2 = `http://localhost:3001/profile/addDocuments/${userEdit.userEdit.id}`

            let documentsFormData = new FormData();
            userEdit.userEdit.typeUser.documentsNewFormData.forEach(document => {
                console.log("this is a doc", document)
                documentsFormData.append("documents", document);
            });
            console.log("this entire a docs", documentsFormData)
            const formData2 = documentsFormData

            const config2 = {     
                headers: { 'content-type': 'multipart/form-data' }
            }

            axios.post(url2, formData2, config2)
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
            <EditGeneral user={user} userEdit={userEdit} setUserEdit={setUserEdit}/>

            {user.typeOfUser == "Company" ? <EditCompany user={user} userEdit={userEdit} setUserEdit={setUserEdit}/>:<h3></h3>}

            <button className="apply_btn btn btn-light" onClick={handleUpdate}>Apply</button>

        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.user.sentUser,
    isAuthenticated: state.user.isAuthenticated,
    isLoggedOut: state.user.isLoggedOut,
  })
  
  export default connect(mapStateToProps, {
  })(ProfileEditPage);

