import ProfilePic from './profilePic'
import background from 'svgs/simple-blue.jpg';

const Banner = ({picURL}) => {
    return (
        
        <div className="container">
            <div className="card">
                <div className="card-body"> 
                    <div className="Banner" style={{
                        backgroundImage: `url(${background})`
                    }}>
                        <ProfilePic picURL={picURL} />
                    </div>
                </div>
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
    