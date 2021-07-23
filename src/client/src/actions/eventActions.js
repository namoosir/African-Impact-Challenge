import axios from "axios";

import { CREATE_EVENT } from "./types";

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
