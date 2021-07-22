import SingleMessage from "./SingleMessage";
const MsgLogBody = ({loggedInUser, user2}) => {

    function getImageURL91(user){
        return `http://localhost:3001/profile/getImage/${user._id}`;
    }

    //const logs = [].concat(loggedInUser)


    return (
        <div>
            {loggedInUser.logs.map((log) => (
              <SingleMessage
                username={loggedInUser.username}
                imgURL={getImageURL91(loggedInUser)}
                timestamp={log.timestamp}
                msg={log.msg}
              />
            ))}
            {user2.logs.map((log) => (
              <SingleMessage
                username={user2.username}
                imgURL={getImageURL91(user2)}
                timestamp={log.timestamp}
                msg={log.msg}
              />
            ))}
        </div>
    )
}

export default MsgLogBody
