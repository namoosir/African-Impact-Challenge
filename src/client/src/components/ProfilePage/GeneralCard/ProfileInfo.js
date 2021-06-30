import React from 'react'
import { Component, useState } from 'react'
import PropTypes from 'prop-types';
import { Link, withRouter } from "react-router-dom";

import main from '../../stylesheets/main.css';

const ProfileInfo = ({user, loggedInUser}) => {

    return (
        
        <div>
            <h1>{user.name} - { user.typeOfUser }</h1>

            { (user.typeOfUser == 'Partner' || user.typeOfUser == 'Entrepreneur') ?
                <h3>{ user.typeUser.company }</h3> : <h3></h3>            
            }
            { user.location ? <p>{ user.location }</p> : <h3></h3> }

            {user && loggedInUser ? (
              user.id === loggedInUser.id ? 
              <Link to="/profile_edit">
                <button type="button" className="btn btn-primary">
                  Edit Profile
                </button> 
              </Link>
              : <button type="button" className="btn btn-primary"><Link to="/profile_edit"></Link>Message</button>
             ) : ""}

        </div>
        
        
    )
}

ProfileInfo.propTypes = {
  /**
   * The the user object that represents info about the user
   */
  user: PropTypes.object
};

ProfileInfo.defaultProps = {

  user: {
      id: "4",
      name: "Bob",
      email: "Will",
      username: "bwill",
      password: "fsdf",
      typeOfUser: "Insr",
      typeUser: {
        image: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal"
      }  
  }
};


export default ProfileInfo
