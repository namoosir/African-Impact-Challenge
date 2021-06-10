import React from 'react'
import { Component, useState } from 'react'

const ProfileInfo = ({user}) => {

    /*
    const [user, setUser] = useState({
        id: "4",
        name: "Bob",
        email: "Will",
        username: "bwill",
        password: "fsdf",
        typeOfUser: "Insr",
        typeUser: {
          classes: ["B07", "CSCC01"],
          image: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
          biography: "Lorem djklakldsal"
        }
        
    });
  
    React.useEffect(() => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      // Given a UserId
      //Muta ID : 60bfc28261b358667d0196a3
      //Apple ID : 60bfc190247b966513e78f66
      //http://localhost:3001/profile/:id
      fetch(`http://localhost:3001/profile/ ${userId}`, requestOptions)
          .then(response => response.json())
          .then(data => setUser({
            id: data._id,
            name: data.name,
            email: data.email,
            username: data.username,
            password: data.password,
            typeOfUser: data.typeOfUser,
            typeUser: data.typeUser
          }))
  
    }, [])
    */

    return (
        
        <div className="profile-title">
            <h1>{user.name} - { user.typeOfUser }</h1>

            { (user.typeOfUser == 'Partner' || user.typeOfUser == 'Entrepreneur') ?
                <h3>{ user.typeUser.company }</h3> : <h3></h3>            
            }
            { user.location ? <p>{ user.location }</p> : <h3></h3> }

            <button type="button" class="btn btn-primary">Message</button>
        </div>
        
        
    )
}

export default ProfileInfo
