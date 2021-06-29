import React from 'react'
import { Component, useState } from 'react'

import GeneralCard from './GeneralCard/GeneralCard';
import Biography from './Biography/Biography';
import Employees from './Employees/Employees';
import Documents from './Documents/Documents';
import { connect } from "react-redux"

import PropTypes from 'prop-types';



const ProfilePage = ({loggedInUser, isAuthenticated, isLoggedOut}) => {
    
    const [user, setUser] = useState({
        id: "4",
        name: "Bob",
        email: "Will",
        username: "bwill",
        password: "fsdf",
        typeOfUser: "Insr",
        image: "",
        biography: "Lorem djklakldsal",
        
        typeUser: {
          id : "4",
          classes: ["B07", "CSCC01"],
        }
        
    });

    const [isOnce, setIsOnce] = useState(true)
    
    React.useEffect(() => {
    
      if(isOnce){
        
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        };
  
        fetch('http://localhost:3001/profile/60d9f89d9bafe0bd62b7187f', requestOptions)
            .then(response => response.json())
            .then(data => setUser({
              id: data._id,
              name: data.name,
              email: data.email,
              username: data.username,
              password: data.password,
              typeOfUser: data.typeOfUser,
              biography: data.biography,
              typeUser: data.typeUser,
              image: `http://localhost:3001/profile/getimage/${data._id}`
            }))
        
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
          {isAuthenticated ? <h1>ISAUt</h1>:<h1>nah</h1>}
          <GeneralCard user={user}/>
          <Biography bioText={user.typeUser.biography}/>
          {(user.typeOfUser == 'Company') ? 
          <div>
          <Employees employees={user.typeUser.employees}/> 
          <Documents document_urls={user.typeUser.documents}/>
          </div> : 
          <h3></h3> }
      </div>
    )
}

const mapStateToProps = (state) => ({
  loggedInUser: state.user.loggedInUser.sentUser,
  isAuthenticated: state.loggedInUser.isAuthenticated,
  isLoggedOut: state.loggedInUser.isLoggedOut,
})

export default connect(mapStateToProps, {
  
})(ProfilePage);
