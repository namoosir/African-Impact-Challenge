import {useEffect, useState, useRef} from 'react'
import SingleMessage from './SingleMessage';
import DirectMsg from "../stylesheets/DirectMsg/msg.css";
import { connect } from "react-redux";
import io from "socket.io-client";
const ENDPOINT = "http://localhost:3001";

const DirectMsgPage = ({loggedInUser2, user3, isAuthenticated, isLoggedOut}) => {

    const [firstTime, setFirstTime] = useState(true)

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

    const [logs, setLogs] = useState(["BBQ"]);
    const logsRef = useRef(logs);
    const [response, setResponse] = useState();
    const [socket, setSocket] = useState();
    const [roomId, setRoomId] = useState(getRoomId(loggedInUser2.id, user3.id));


    function getRoomId(userid1, userid2){
        if (userid1 > userid2) return userid1 + "-" + userid2;
        else  return userid2 + "-" + userid1;
    }

    // This is in closure for socket.on, use "Ref"
    function updateRecivedMsg(msg){
        const todayTime = new Date(Date.now()).toLocaleString()
        const recivedMsg = {
            message: msg,
            date : todayTime,
            userid : user3.id
        }
        const currentLogs = logsRef.current
        // update Logs
        setLogs([...currentLogs,recivedMsg])
    }


    useEffect(() => {
        logsRef.current = logs;
        if (firstTime){

            /* Socket Setup (START) */

            // Start connection and save the state
            const socket2 = io(ENDPOINT);
            setSocket(socket2);

            // Join a chat room 
            socket2.emit('startChat', roomId)

            // Gets a welcome form server when joining room
            socket2.on("serverWelcome", data => {
                console.log(data);
            });

            // Recives a Msg that was sent by other user and update view
            socket2.on("serverReciverMsg", msg => {
                //console.log("RECIOVED",msg);
                updateRecivedMsg(msg);
            });
            /* Socket Setup (END) */




            
            // Get User logs with API Call
            const requestOptions = {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            };

            fetch(
                `http://localhost:3001/msg/getLogs/${loggedInUser2.id}/${user3.id}`,
                requestOptions
            ).then((response) => {
                if (response.status == 404) {
                    console.log("404$$$")
                        setLogs([]);
                } 
                if (response.status == 200) {
                    response.json().then((data) => {
                        console.log("then")
                            setLogs(data.chatlogs);
                    });
                    console.log(logs);
                }
            })
            setFirstTime(false);

        }
        
    })

    




    
        

    function SendMessage(event){
        const todayTime = new Date(Date.now()).toLocaleString()

        if (event.key === 'Enter'){
            event.preventDefault(); 

            const msg = {
                message: event.target.value,
                date : todayTime,
                userid : loggedInUser2.id
            }
            event.target.value = '';

            //Emit Msg
            socket.emit("clientSenderMsg", msg.message, roomId);

            // update Logs
            setLogs([...logs,msg])

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify({
                    user1: loggedInUser2.id,
                    user2: user3.id,
                    msgUser: loggedInUser2.id,
                    msg: msg.message,
                    date: msg.date
                })
            };

            fetch(
                `http://localhost:3001/msg/saveLogs`,
                requestOptions
            )

        }
    }

    function getImageURL101(userid){
        if (!userid) {
            return "" 
        }
        return `http://localhost:3001/profile/getImage/${userid}`;
    }

    function getUsername(userid){
      if (userid == loggedInUser2.id) return loggedInUser2.username;
      if (userid == user3.id) return user3.username;
    }

    return (
        <div className="card-body">
            <h1 className="msg_header">{loggedInUser2.username}-{user3.username}</h1>

            <div className="msg_body">
                {logs.map((log) => (
                <SingleMessage
                    username={getUsername(log.userid)}
                    imgURL={getImageURL101(log.userid)}
                    timestamp={log.date}
                    msg={log.message}
                />
                ))}
            </div>


            <form>
                <input className="msgbox" type="text" placeholder="Message"  onKeyDown={SendMessage}/>
            </form>

        </div>
    )
}


const mapStateToProps = (state) => ({
    loggedInUser2: state.user.user.sentUser,
    isAuthenticated: state.user.isAuthenticated,
    isLoggedOut: state.user.isLoggedOut,
    user3: state.profile.profile,
  
});

export default connect(mapStateToProps)(DirectMsgPage)
