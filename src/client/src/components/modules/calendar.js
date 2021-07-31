import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!

import { useState, useEffect} from "react";

import { createEventSuccessful } from "../../actions/eventActions";
import {connect} from "react-redux"

import AddEvent from "./addEvent";

import map from "../stylesheets/calendar.css";

const Calendar = ({ user, module, setDisplay, history, events, setEvents }) => {
  const [editing, setEditing] = useState({
    isEditingCalendar: false,
  });

  const { isEditingCalendar } = editing;

  const onSubmitAddEvent = (e) => {
    e.preventDefault();

    setEditing({
      ...editing,
      isEditingCalendar: true,
    });
  };

  const onCancelCalendar = (e) => {
    e.preventDefault();

    setDisplay({
      displayCalendar: false,
    });
  };

  return (
    <>
      <div
        className={
          isEditingCalendar ? "row justify-content-center" : "container"
        }
      >
        <div className={isEditingCalendar ? "col-lg-8 ms-4" : ""}>
          <div className="card map mt-3">
            <div className="card-body body-map">
              <h2 className="text-center">
                {module ? module.name : "Calendar"} Calendar
              </h2>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin]}
                initialView="dayGridMonth"
                height="75vh"
                slotDuration="00:30:00"
                slotLabelInterval="01:00"
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                events= {events.currEvents}
              />

              <div className="text-center">
                {user &&
                module &&
                !isEditingCalendar &&
                user.id === module.user._id ? (
                  <form onSubmit={onSubmitAddEvent} className="d-inline">
                    <button type="submit" className="btn btn-success me-2">
                      Add Event
                    </button>
                  </form>
                ) : (
                  ""
                )}
                <form onSubmit={onCancelCalendar} className="d-inline">
                  <button type="submit" className="btn btn-light ms-2">
                    Go To Module
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {isEditingCalendar ? (
          <>
            <AddEvent
              module={module}
              setEditing={setEditing}
              history={history}
              events={events}
              setEvents={setEvents}
            />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default connect(null, {})(Calendar);
