import { Component, useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types';

const Employee = ({employeeId}) => {

    console.log("HFJDSNFKJDNSKL")

    const [user2, setUser2] = useState({
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

      fetch(`http://localhost:3001/profile/${employeeId}`, requestOptions)
          .then(response => response.json())
          .then(data => setUser2({
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
        <div >
            <img className="profile_mini_img" src={user2.typeUser.image}></img>
        </div>
    )
}

Employee.propTypes = {
  /**
   * The user Id for this employee
   */
  employeeId: PropTypes.string
};

Employee.defaultProps = {
  employeeId: "60c17c3805ef1ecaebcef71c"
};

export default Employee
