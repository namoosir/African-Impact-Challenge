
import Biography from 'components/Biography'
const ProfileBottomUser = ({name, bio}) => {
    return (
        <div className="profile_bottom">

        <div className="name_btn">
            <h1 className="profile_name"> {name}</h1>
            <button className="msg_btn">Message</button>
        </div>

        <div className="profile_grid">
            <Biography bioText={bio}/>
        </div>
            
     </div>
    )
}

export default ProfileBottomUser
