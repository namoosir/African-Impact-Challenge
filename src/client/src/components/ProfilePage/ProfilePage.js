import React from 'react'
import { Component, useState } from 'react'

import GeneralCard from './GeneralCard/GeneralCard';
import Biography from './Biography/Biography';
import Employees from './Employees/Employees';
import Documents from './Documents/Documents';

import PropTypes from 'prop-types';



const ProfilePage = () => {
    
    const [user, setUser] = useState({
        id: "4",
        name: "Bob",
        email: "Will",
        username: "bwill",
        password: "fsdf",
        typeOfUser: "Insr",
        image: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal",
        typeUser: {
          classes: ["B07", "CSCC01"],
        }
        
    });
    
    React.useEffect(() => {
    
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
            typeUser: data.typeUser
          }))
      
    
      fetch('http://localhost:3001/getimage/60d9f89d9bafe0bd62b7187f', requestOptions)
        .then(data => {
          setUser(prevState => ({
            ...prevState,
            image: data
          })

          )
        })




    })


    return (
        <div>
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


export default ProfilePage
