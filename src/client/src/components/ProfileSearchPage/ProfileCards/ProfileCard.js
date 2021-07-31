import { connect } from "react-redux";
import {
    getProfile
  } from "../../../actions/profileAction";

const ProfileCard = ({user, history, getProfile}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("IN PROFILE CARD", user);

        getProfile(user, history);
        history.push("/profile");
    }

    function getImageURL92(user){
        return `http://localhost:3001/profile/getImage/${user._id}`;
    }

    return (
        <div className="profile_search_card">
            <img className="profile_search_profile_img" src={getImageURL92(user)}></img>
            <div className="profile_search_body">
                <h1>{user.name}-{user.typeOfUser}</h1>
                <form onSubmit={onSubmit}>
                <button type="submit" className="btn btn-success">View Profile</button>
                </form>
                {user.location ? <p class="profile_search_p_location">{ user.location }</p> : <h3></h3>}
                {user.typeOfUser == "Company" && user.typeUser.lookingFunding == true ? 
                <p className="profile_search_p_funding">Seeking Funds</p>:<h3></h3>}

            </div>
            
        </div>
        
    )
}

export default connect(null, {getProfile})(ProfileCard)
