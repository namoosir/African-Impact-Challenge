import React from 'react'
import EditGeneral from './EditGeneral'
import EditCompany from './EditCompany'
import { Component, useState, useEffect } from 'react'
import profilePage from '../stylesheets/ProfileEditPage/profilePage.css'
import { func } from 'prop-types'
import axios from "axios";
import {connect} from "react-redux"
import AuthHeader from "../AuthHeader";
import { loadSelfProfile } from '../../actions/profileAction'

const ProfileEditPage = ({user, userProfile, isAuthenticated, history, loadSelfProfile}) => {

    const [user2, setUser2] = useState({
        "id": "60dbc77aeda7da46a1baa945",
        "image": "5ef7c4986f5bab2e3b01580989de5ba8",
        "imageFile" : [],
        "biography": "y is coolguy and I have a lot of money",
        "name": " hs",
        "username": "arsm",
        "email": "muse@lhars",
        "password": "i123",
        "typeOfUser": "Company",
        "typeUser": {
            "documents":[
                "5ef7c4986f5bab2e3b01580989de5ba8",
                "5ef7c4986f5bab2874nd73h580989de5ba8"
            ],
            "documentFiles":[],
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

        userEdit : {
            ...userProfile,
            imageFile : "NULL",
            typeUser: {
                ...userProfile.typeUser,
                documentFiles: []
            }
        }
        
    });

    async function handleUpdate(){

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

//             console.log("formata?", userEdit.userEdit.imageFormData)
//             const url = `http://localhost:3001/profile/editImage/${userEdit.userEdit.id}`

//             let imageFormData = new FormData();
//             imageFormData.append("imageURL", userEdit.userEdit.imageFormData);
//             const formData = imageFormData

//             console.log("format2?", formData)
//             const config = {     
//                 headers: { 'content-type': 'multipart/form-data' }
//             }

//             axios.post(url, formData, config)


        await Promise.all([

            new Promise((resolve, reject) => {
                if(userEdit.userEdit.imageFile !== "NULL") {
                    const url = `http://localhost:3001/profile/editImage/${userEdit.userEdit.id}`
    
                    console.log("IMAGEFILE", userEdit.userEdit.imageFile)
                    let imageFormData = new FormData();
                    imageFormData.append("imageURL", userEdit.userEdit.imageFile);
                    const formData = imageFormData
    
                    const config = {     
                        headers: { 'content-type': 'multipart/form-data' }
                    }
    
                    axios.post(url, formData, config)
                    .then(response => {
                        resolve();
                        console.log(response);
                    })
                    .catch(error => {
                        resolve();
                        console.log(error);
                    });
    
                }  else{
                    resolve()
                    console.log("NOFORMDATA")
                }   

            }),

            new Promise((resolve, reject)=> {
                const url2 = `http://localhost:3001/profile/addDocuments/${userEdit.userEdit.id}`

                let documentsFormData = new FormData();
                console.log("HELDOS",userEdit.userEdit.typeUser);
                userEdit.userEdit.typeUser.documentFiles.forEach(document => {
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
                    resolve()
                })
                .catch(error => {
                    resolve()
                    console.log(error);
                });
                })
        ])

        loadSelfProfile(userProfile);
        history.push("/profile");
                
            
            

            

    }



    return (
        <>
        <AuthHeader
        user={user}
        isAuthenticated={isAuthenticated}
        history={history}
      />
        <div className="profile_edit_page mt-4">
            <EditGeneral user={userProfile} userEdit={userEdit} setUserEdit={setUserEdit}/>

            {userProfile.typeOfUser == "Company" ? <EditCompany user={userProfile} userEdit={userEdit} setUserEdit={setUserEdit}/>:<h3></h3>}

            <button className="apply_btn btn btn-light" onClick={handleUpdate}>Apply</button>

        </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.user.sentUser,
    userProfile: state.profile.profile,
    isAuthenticated: state.user.isAuthenticated,
    isLoggedOut: state.user.isLoggedOut,

  })
  
  export default connect(mapStateToProps, { loadSelfProfile
  })(ProfileEditPage);

