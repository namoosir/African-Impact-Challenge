import React from 'react'
import Banner from './Banner'
import ProfileInfo from './ProfileInfo'
import { Component, useState, useEffect } from 'react'
import PropTypes, { func } from 'prop-types';

import main from '../../stylesheets/main.css';

const GeneralCard = ({user, loggedInUser}) => {


    return (
        <div className='container margins'>
            <div className='card'>
            <Banner className="card-img-top" picURL={user.image}/>
                <div className="card-body">
                    <ProfileInfo user={user} loggedInUser={loggedInUser}/>
                </div>                
            </div>
        </div>
    )
}

GeneralCard.propTypes = {
    /**
     * The the user object that represents info about the user
     */
    user: PropTypes.object
};
  
GeneralCard.defaultProps = {

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


export default GeneralCard
