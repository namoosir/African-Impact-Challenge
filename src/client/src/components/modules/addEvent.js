import { useState } from "react";

import { connect } from "react-redux";
import { createEvent } from "../../actions/eventActions";

const AddEvent = ({ module, setEditing, history, createEvent }) => {
  const [event, setEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

  const { title, start, end } = event;

  const onChangeEvent = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const onCancelEdit = (e) => {
    e.preventDefault();

    setEditing({
      isEditingCalendar: false,
    });
  };

  const onAddEvent = (e) => {
    e.preventDefault();

    const send = {
      ...event,
      moduleId: module._id,
    };

    createEvent(send);

    module.events.push(event);

    setEditing({
      isEditingCalendar: false,
    });
  };

  return (
    <div className="col-lg-3 mt-3 ms-4">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center">Add Event</h2>
          <form onSubmit={onAddEvent}>
            <label htmlFor="title">
              <h6>Title</h6>
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              value={title}
              onChange={onChangeEvent}
            />

            <div className="mt-3">
              <label htmlFor="start">
                <h6>Start Date & Time</h6>
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="start"
                name="start"
                value={start}
                onChange={onChangeEvent}
              />
            </div>

            <div className="mt-3">
              <label htmlFor="end">
                <h6>End Date & Time</h6>
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="end"
                name="end"
                value={end}
                onChange={onChangeEvent}
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success">
                Add Event
              </button>
            </div>
          </form>

          <form onSubmit={onCancelEdit} className="text-center">
            <button type="submit" className="btn btn-danger">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {createEvent})(AddEvent);
