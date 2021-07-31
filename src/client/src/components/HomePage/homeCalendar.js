import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!

import { useState, useEffect } from "react";

import map from "../stylesheets/calendar.css";

const HomeCalendar = ({ user, history, events }) => {

  useEffect(() => {
    console.log(events);
  }, [])

    const onSubmitCalendar = (e) => {
        e.preventDefault();

        history.push("/calendar");
    }

  return (
    <>
      <div className="card map mt-3">
        <div className="card-body body-map">
          <h2 className="text-center text-light"> Upcoming Events </h2>
          <hr></hr>
          <FullCalendar
            plugins={[timeGridPlugin]}
            initialView="timeGridDay"
            height="50vh"
            slotDuration="00:30:00"
            slotLabelInterval="01:00"
            events={events.currEvents}
          />

          <div className="text-center">
            <form onSubmit={onSubmitCalendar} className="d-inline">
              <button className="btn btn-light ms-2">See Calendar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCalendar;