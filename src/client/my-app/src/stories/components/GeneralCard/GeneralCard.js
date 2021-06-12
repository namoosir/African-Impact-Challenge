import React from 'react'
import Banner from 'components/GeneralCard/Banner'
import ProfileInfo from 'components/GeneralCard/ProfileInfo'
import { Component, useState } from 'react'



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

export default GeneralCard
