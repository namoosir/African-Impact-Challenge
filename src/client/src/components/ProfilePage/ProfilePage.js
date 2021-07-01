import React from 'react'
import { Component, useState } from 'react'

import GeneralCard from './GeneralCard/GeneralCard';
import Biography from './Biography/Biography';
import Employees from './Employees/Employees';
import Documents from './Documents/Documents';
import { connect } from "react-redux"

import PropTypes from 'prop-types';



const ProfilePage = ({userProfile, loggedInUser, isAuthenticated, isLoggedOut}) => {
    
    const [user, setUser] = useState({
      "_id": "60dbc77aeda7da46a1baa945",
      "image": "5ef7c4986f5bab2e3b01580989de5ba8",
      "biography": "y is coolguy and I have a lot of money",
      "name": " hs",
      "username": "arsm",
      "email": "muse@lhars",
      "password": "i123",
      "typeOfUser": "Company",
      "typeUser": {
          "employees": ["kdslmf","KSmckmdlkc"],
          "documents": [
              "<nameofDoc1>",
              "<nameofDoc2>",
              "blob:http://localhost:3000/4c99e26a-c36f-426a-b96c-cdf8e4b266d6",
              "8bccbae1e6b654a4e9013cd7152ad30b",
              "eccc993eddaec292abd8a96ecf212f0c",
              "4d2f89e78cc190eb5f0d34344e53c9a9",
              "8b1e04af1a5087e91c576bee6a451c22",
              "3095a884455d46ef99fb329a0c0d7efc",
              "32549de1422c63e8c20dc57e4830d348",
              "8d9b7c2aad3bdc1b1381fb3254c66e43"
          ],
          "_id": "60dbc77aeda7da46a1baa944",
          "__v": 0
      },
      "__v": 0
  });

    const [isOnce, setIsOnce] = useState(true)
/*
    console.log("Rin")
  
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch('http://localhost:3001/profile/60dbc77aeda7da46a1baa945', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log("fecthData",data)
          setUser(data)
        }
    )
    */

    React.useEffect(() => {

      console.log(userProfile)
    
      if(isOnce){
        
        console.log("Rin")
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        };
  
        // fetch('http://localhost:3001/profile/60d9f89d9bafe0bd62b7187f', requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //       console.log(data)
        //       setUser({
        //         id: data._id,
        //         name: data.name,
        //         email: data.email,
        //         username: data.username,
        //         password: data.password,
        //         typeOfUser: data.typeOfUser,
        //         biography: data.biography,
        //         typeUser: data.typeUser,
        //         image: `http://localhost:3001/profile/getImage/${data._id}`
        //       })
        //     }
            //  )
        
            /*
            const requestOptions2 = {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
            };
      
      
        fetch('http://localhost:3001/profile/getimage/60d9f89d9bafe0bd62b7187f', requestOptions2)
          .then(data => {
            setUser(prevState => ({
              ...prevState,
              image: data.url
            })
  
            )
          })
          */
          setIsOnce(false)
      }
    })

    return (
        <div className="profile_edit_page">
          <GeneralCard user={userProfile} loggedInUser={loggedInUser}/>
          <Biography bioText={userProfile.biography}/>
          {(user.typeOfUser == 'Company') ? 
          <Employees employees={user.typeUser.employees}/>  : 
          <h3></h3> }
          {(user.typeOfUser == 'Company') ? 
          <Documents document_urls={user.typeUser.documents}/>  : 
          <h3></h3> }


      </div>
    )
}


const mapStateToProps = (state) => ({
  loggedInUser: state.user.user.sentUser,
  isAuthenticated: state.user.isAuthenticated,
  isLoggedOut: state.user.isLoggedOut,
  userProfile: state.profile.profile
})

export default connect(mapStateToProps, {
})(ProfilePage);


// export default ProfilePage