import React from "react";
import { Component, useState, useEffect } from "react";
import Header from "../header";
import Zoom from "./Zoom"


import PropTypes from "prop-types";


const StudentView = ({}) => {
    const [joinMeeting, setJoinMeeting] = useState(false);
    return (
        <div>
            <Header />
            {joinMeeting ? (
                <Zoom />
            ) : (
                <header>
                    <h1>Join Meeting</h1>
                    <button className='btn' onClick={() => setJoinMeeting(true)}>Join</button>
                </header>
            )}
        </div>
    )
}

export default StudentView;