import axios from "axios";

import {
  LOAD_MODULE,
  CREATE_MODULE,
  CREATE_MODULE_TRY,
  CANCEL_CREATE_MODULE
} from "./types";

export const loadModules = (history) => dispatch => {

}

export const createModules = (module, user, history) => dispatch =>  {
    axios
      .post(`http://localhost:3001/createModule/${user.id}`, module)
      .then(res => {
          dispatch({
              type: CREATE_MODULE
          })
      })
      .catch(err => {
          console.log(err);
          history.push("/home");
      })
}

export const isCreating = () => dispatch => {
    dispatch ({
        type: CREATE_MODULE_TRY
    })
}

export const cancelCreatingModule = () => dispatch => {
    dispatch({
        type: CANCEL_CREATE_MODULE
    })
}

