import ProfilePic from './profilePic'
import background from 'svgs/simple-blue.jpg';

const Banner = ({picURL}) => {
    return (
        <div  className="Banner" style={{
            backgroundImage: `url(${background})` 
        }}>
            <ProfilePic picURL={picURL}/>
        </div>
    )
}

export default Banner
