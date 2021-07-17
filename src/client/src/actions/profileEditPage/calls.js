import axios from "axios";

export const updateUser = (userId, user, history) => dispatch => {
    axios
      .post("http://localhost:3001/register", {params: {}})
        .then(res => {
          history.push("/login");
        })
        .catch(err => {
          console.log(err, "couldn't connect to server");
        })
  };