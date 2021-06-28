import React from 'react'
import Documents from './Documents/Documents'
import { Component, useState } from 'react'
const EditCompany = ({user ,userEdit, setUserEdit}) => {


    return (
        <div className="edit_company">
            <Documents user={user}/>
            
        </div>
       
    )
}

export default EditCompany
