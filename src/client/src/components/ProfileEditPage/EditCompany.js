import React from 'react'
import Documents from './Documents/Documents'
import { Component, useState } from 'react'


const EditCompany = ({user ,userEdit, setUserEdit}) => {


    return (
        <div className="container">
            <Documents user={user} userEdit={userEdit} setUserEdit={setUserEdit}/>
        </div>
       
    )
}

export default EditCompany
