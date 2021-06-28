const ProfileCard = ({user}) => {
    return (
        <div className="profile_search_card">
            <img className="profile_search_profile_img" src={user.image}></img>
            <div className="profile_search_body">
                <h1>{user.name}-{user.typeOfUser}</h1>

                {user.location ? <p class="profile_search_p_location">{ user.location }</p> : <h3></h3>}
                {user.typeOfUser == "Company" && user.typeUser.lookingFunding == true ? 
                <p className="profile_search_p_funding">Seeking Funds</p>:<h3></h3>}

            </div>
            
        </div>
        
    )
}

export default ProfileCard