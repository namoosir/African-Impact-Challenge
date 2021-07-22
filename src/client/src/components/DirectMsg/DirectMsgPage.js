import {useEffect, useState} from 'react'
import MsgLogBody from './MsgLogBody'
import DirectMsg from "../stylesheets/DirectMsg/msg.css";

const DirectMsgPage = () => {

    const [loggedInUser, setLoggedInUser] = useState({
        _id: "60e4acec479dbc603e47fd59",
        username: "Bob",
        /* ... */
        logs: [
            { msg: "hello", timestamp: "2012-11-4 19:12:58"},
            { msg: "im bob", timestamp: "2012-11-4 19:13:58"},
            { msg: "hello", timestamp: "2013-11-4 19:12:58"},
            { msg: "nice to meet you", timestamp: "2012-11-4 19:14:58"},
            { msg: "whats the time", timestamp: "2012-11-4 19:15:58"}
        ]

    });

    const [user2, setUser2] = useState({
        _id: "60e4ad4d479dbc603e47fd61",
        username: "Dane",
        /* ... */

        logs: [
            { msg: "hello", timestamp: "2012-11-4 19:12:59"},
            { msg: "im dane", timestamp: "2012-11-4 19:13:59"},
            { msg: "nice to meet you to", timestamp: "2012-11-4 19:14:59"},
            { msg: "its now", timestamp: "2012-11-4 19:15:59"}
        ]

    });

    // Get User logs with API Call

    function SendMessage(event){
        var today = new Date()
        if (event.key === 'Enter'){
            const msg = {
                msg: event.target.value,
                timestamp : (today.getFullYear() + '/' + today.getMonth() + 1) + '/' + today.getDate() + "\t" + 
                                today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
            }
    
            setLoggedInUser(prevState =>({
                ...prevState,
                logs: [...prevState.logs,msg]
            }))
        }
    }

    return (
        <div className="card-body">
            
            <h1 className="msg_header">{loggedInUser.username}-{user2.username}</h1>

            <MsgLogBody loggedInUser={loggedInUser} user2={user2}/>

            <form>
                <input className="msgbox" type="text" placeholder="Message" onKeyDown={SendMessage}/>
            </form>

        </div>
    )
}

export default DirectMsgPage
