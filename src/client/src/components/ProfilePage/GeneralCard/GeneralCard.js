import React from 'react'
import Banner from './Banner'
import ProfileInfo from './ProfileInfo'
import { Component, useState } from 'react'
import PropTypes from 'prop-types';

import main from '../../stylesheets/main.css';

const GeneralCard = ({user}) => {

    return (
        <div className='container'>
            <div className='card'>
                <div className="card-body">
                    <Banner className="card-img-top"picURL={user.typeUser.image}/>
                    <ProfileInfo user={user}/>
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
