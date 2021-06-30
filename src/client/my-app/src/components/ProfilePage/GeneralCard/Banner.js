
import background from 'svgs/simple-blue.jpg';
import PropTypes from 'prop-types';

const Banner = ({picURL}) => {
    return (
        
       
        <div className="Banner card-img-top" style={{
            backgroundImage: `url(${background})`
        }}>
            <div className="profile-pic">
                <img className="profile_img" src={picURL}></img>
            </div>
        </div>
  

    )
}

Banner.propTypes = {
    /**
     * The URL for the profile image
     */
    picURL: PropTypes.string
};
  
Banner.defaultProps = {
    picURL: ["http://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s320/BlueHead.jpg"]
};



export default Banner

