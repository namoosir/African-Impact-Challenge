import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

// const Container = styled.div`
//     padding: 20px;
//     display: flex;
//     height: 100vh;
//     width: 90%;
//     margin: auto;
//     flex-wrap: wrap;
// `;

// const StyledVideo = styled.video`
//     height: 40%;
//     width: 50%;
// `;

const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, []);

    return (
        <video style={{height: "40%", width:"50%"}} playsInline autoPlay ref={ref} />
    );
}


const videoConstraints = {
    height: window.innerHeight / 2,
    width: window.innerWidth / 2
};

const Meeting = (props) => {
    const [peers, setPeers] = useState([]);
    const socketRef = useRef();
    const userVideo = useRef();
    const peersRef = useRef([]);
    const roomID = props.match.params.roomID;

    console.log("we are here");

    useEffect(() => {
        console.log("inside use effect");
        socketRef.current = io.connect("/meeting");
        navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true }).then(stream => {
           userVideo.current.srcObject = stream;
           socketRef.current.emit("join room");
           socketRef.current.on("all users", users => {
               const peers = [];
               users.forEach(userID => {
                   const peer = createPeer(userID, socketRef.current.id, stream);
                   peersRef.current.push({
                       peerID: userID,
                       peer,
                   })
                   peers.push(peer);
               })
               setPeers(peers);
           })
           
           socketRef.current.on("user joined", payload => {
               const peer = addPeer(payload.signal, payload.callerID, stream);
               peersRef.current.push({
                   peerID: payload.callerID,
                   peer,
               })

               setPeers(users => [...users, peer]);
           });

           socketRef.current.on("receiving returned signal", payload => {
               const item = peersRef.current.find(p => p.peerID === payload.id);
               item.peer.signal(payload.signal);
           });
        })
    }, []);

    function createPeer(userToSignal, callerID, stream) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });

        peer.on("signal", signal => {
            socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
        })

        return peer;
    }

    function addPeer(incomingSignal, callerID, stream) {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        })

        peer.on("signal", signal => {
            socketRef.current.emit("returning signal", { signal, callerID })
        });

        peer.signal(incomingSignal);

        return peer;
    }

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <video muted ref={userVideo} autoPlay playsInline />
            {peers.map((peer, index) => {
                return (
                    <video key={index} peer={peer} />
                );
            })}
        </div>
    );
};

export default Meeting;