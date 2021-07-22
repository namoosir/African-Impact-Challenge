import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!

import map from "../stylesheets/calendar.css";

const Calendar = ({ user, module, setDisplay }) => {
  const onCancelCalendar = (e) => {
    e.preventDefault();

    setDisplay({
      displayCalendar: false,
    });
  };

  const head = {
    center: module ? `${module.name}` : "Calendar",
  };
  return (
    <>
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
          />

          <div className="text-center">
            {user && module && user.id === module.user._id ? (
              <form className="d-inline">
                <button className="btn btn-success me-2">Add Event</button>
              </form>
            ) : (
              ""
            )}
            <form onSubmit={onCancelCalendar} className="d-inline">
              <button className="btn btn-light ms-2">Go To Module</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
