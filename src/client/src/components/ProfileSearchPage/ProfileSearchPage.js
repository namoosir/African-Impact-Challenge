import React from 'react'
import { Component, useState } from 'react'
import ProfileCards from './ProfileCards/ProfileCards'
import SearchHeader from './SearchHeader'
const ProfileSearchPage = () => {

    const [users, setUsers] = useState([
        
        {
            id: "4",
            name: "Bob",
            email: "Will",
            username: "bwill",
            password: "fsdf",
            typeOfUser: "Company",
            typeUser: {
            classes: ["B07", "CSCC01"],
            image: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
            biography: "Lorem djklakldsal",
            lookingFunding: true
            }
        },

        {
            id: "5",
            name: "Bob1",
            email: "Will",
            username: "bwill",
            password: "fsdf",
            typeOfUser: "Company",
            location: "Hillsbury Mecleveins",
            typeUser: {
            classes: ["B07", "CSCC01"],
            image: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
            biography: "Lorem djklakldsal",
            lookingFunding: true
            }
        },

        {
            id: "6",
            name: "Bob2",
            email: "Will",
            username: "bwill",
            password: "fsdf",
            location: "Ontario Toronto",
            typeOfUser: "Company",
            typeUser: {
            classes: ["B07", "CSCC01"],
            image: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
            biography: "Lorem djklakldsal",
            lookingFunding: false
            }
        }
        
        

    ]);

    return (
        <div className="profile_search">
            <SearchHeader/>
            <ProfileCards users={users}/>
        </div>
    )
}

export default ProfileSearchPage
