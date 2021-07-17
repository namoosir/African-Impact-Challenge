import React from "react";
import { Component, useState, useEffect } from "react";
import Header from "../header";

import { ZoomMtg } from '@zoomus/websdk'

import PropTypes from "prop-types";

//ZoomMtg.preLoadWasm();
//ZoomMtg.prepareJssdk();


const InstructorView = () => {
  const[joinMeeting, setJoinMeeting] = useState(false);
    return (
        <div>
            <Header />
                <header>
                    <h1>Start Meeting</h1>
                    <button className='btn' onClick={() => setJoinMeeting(true)}>Start</button>
                </header>
        </div>
    )
}

export default InstructorView;