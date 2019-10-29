import { LOGIN_SUCCESS } from "../actions/auth";

const token = localStorage.getItem("jwt");
/// this is to store the token, in our browser
const initialState = token ? token : null;
/// if token, then initialState = token, otherwise null

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("jwt", action.payload);
      return action.payload;
    default:
      return state;
  }
};