import React from 'react'

const ProfileInfo = (user) => {
    return (
        <div>
            <h1>{ user.name } - { user.typeOfUser }</h1>
            { (user.typeOfUser == 'Partner' || user.typeOfUser == 'Entrepreneur') ?
                <h3>{ user.typeUser.company }</h3> : {}            
            }
            { user.location ? <p>{ user.location }</p> : {} }

            <button type="button" class="btn btn-primary">Primary</button>
        </div>
    )
}

export default ProfileInfo
