import ProfileCard from './ProfileCard'
const ProfileCards = ({users}) => {
    return (
      
        <div className="profile_search_cards">
                {users.map((user) => (
                    <ProfileCard user={user}/>
                ))}
        </div>   
            
        
    )
}

export default ProfileCards
