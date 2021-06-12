import ProfilePic from 'components/GeneralCard/profilePic'
import background from 'svgs/simple-blue.jpg';

const Banner = ({picURL}) => {
    return (
        
       
        <div className="Banner card-img-top" style={{
            backgroundImage: `url(${background})`
        }}>
            <div className="profile-pic">
                <ProfilePic picURL={picURL} />
            </div>
        </div>
  

    )
}

export default Banner

{/*<div  className="Banner" style={{
            backgroundImage: `url(${background})` 
        }}>
            <ProfilePic picURL={picURL}/>
    </div>*/}
    