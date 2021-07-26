import axios from "axios";

import { CREATE_EVENT, CREATE_EVENT_SUCCESSFUL } from "./types";

export const createEvent = (event) => (dispatch) => {
    axios
      .post("http://localhost:3001/event/add", event)
      .then(res => {
        dispatch({
            type: CREATE_EVENT
        })
      })
      .catch(e => {
          console.log(e);
      })

}

export const createEventSuccessful = () => (dispatch) => {
  dispatch({
    type: CREATE_EVENT_SUCCESSFUL
  })
}
