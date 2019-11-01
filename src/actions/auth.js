// TODO login action

import request from "superagent";
const baseUrl = "http://localhost:4000";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = (name, password) => (dispatch, getState) => {
  console.log(name, password);
  request
    .post(`${baseUrl}/login`)
    .send({ name, password })
    .then(response => {
      console.log("What do we get?", response);
      dispatch({ type: LOGIN_SUCCESS, payload: response.body.jwt });
    })
    .catch(console.error);
};
