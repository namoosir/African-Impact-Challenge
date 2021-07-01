import React from 'react'
import { Component, useState } from 'react'

import GeneralCard from 'components/GeneralCard/GeneralCard';
import Biography from 'components/ProfilePage/Biography/Biography';
import Employees from 'components/Employees/Employees';
import Documents from 'components/Documents/Documents';



const ProfilePage = () => {
    
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

      
      //Enterpenur Profile ID: 60c178ad1908fcc56bb08fdd  60c178ff1908fcc56bb08fdf
      //Partner Profile ID: 60c3891c77ad162cbc804537
      //Instructor Profile ID: 60c38af5b3e0bb3434bb2433
      //Company Profile Id: 60c17c3805ef1ecaebcef71d
      fetch('http://localhost:3001/profile/60c17c3805ef1ecaebcef71d', requestOptions)
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


    return (
        <div className="ProfilePage">
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
