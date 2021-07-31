import React from 'react'

const SingleMessage = ({username, imgURL, timestamp, msg}) => {
    

    return (
        <div className="single_msg">
            <img className="img" src={imgURL}></img>

            <div className="textbody">
                <div className="text_heading">
                    <p className="username">{username}</p>
                    <p className="timestamp">{timestamp}</p>
                </div>
                <p className="msg_body">{msg}</p>
            </div>
            
        </div>
    )
}

export default SingleMessage
