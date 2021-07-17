import React from "react";
import { Component, useState, useEffect } from "react";
import { ZoomMtg } from '@zoomus/websdk';

import PropTypes from "prop-types";



const Zoom = ({}) => {

    const crypto = require('crypto') // crypto comes with Node.js

    var apiKey = 'ytm4dV31RgGtgpTWwLeELg';
    var apiSecret = 'yRSjQnIPHb8nLN1m6BI1iDxXDv1uT2bv4kd7';
    var meetingNumber = 9556422036;
    var leaveUrl = 'http://localhost:3000';
    var userName = 'WebSDK';
    var userEmail = 'test@gmail.com';
    var passWord = 'pH3w0P';

    function generateSignature(apiKey, apiSecret, meetingNumber, role) {
        // Prevent time sync issue between client signature generation and zoom 
        const timestamp = new Date().getTime() - 30000
        const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64')
        const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64')
        const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64')

        return signature
    }

    // pass in your Zoom JWT API Key, Zoom JWT API Secret, Zoom Meeting Number, and 0 to join meeting or webinar or 1 to start meeting
    console.log(generateSignature(process.env.API_KEY, process.env.API_SECRET, 123456789, 0));



    var signature = generateSignature(apiKey, apiSecret, meetingNumber, 0);
    // generateSignature(apiKey, apiSecret, meetingNumber, 0).then((res) => {
    //     signature = res;
    // });

    const[joinMeeting, setJoinMeeting] = useState(false);
    useEffect(() => {
        showZoomDiv();
        ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.5/lib', '/av'); 
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();
        createMeeting();
    }, [])

    const showZoomDiv = () => {
        document.getElementById('zmmtg-root').style.display = 'block';
    }

    const createMeeting = () => {
        ZoomMtg.init({
            leaveUrl: leaveUrl,
            isSupportAV: true,
            success: (success) => {
              console.log(success)
          
              ZoomMtg.join({
                signature: signature,
                meetingNumber: meetingNumber,
                userName: userName,
                apiKey: apiKey,
                userEmail: userEmail,
                passWord: passWord,
                success: (success) => {
                  console.log(success)
                },
                error: (error) => {
                  console.log(error)
                }
              })
          
            },
            error: (error) => {
              console.log(error)
            }
          })
    }

    return (
        <header>
            <h1>Join Meeting</h1>
            <button className='btn' onClick={() => setJoinMeeting(true)}>Join</button>
        </header>
    )
}

export default Zoom;
