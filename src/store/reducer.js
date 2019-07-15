import { GET_API_COOKING, GET_API_RECREATIONAL, USER, SIGN_IN } from "./action-type";
import { combineReducers } from "redux";

function cooking(state = "", action) {
  switch (action.type) {
    case GET_API_COOKING:
      return action.data;
    default:
      return state;
  }
}
function recreational(state = "", action) {
  switch (action.type) {
    case GET_API_RECREATIONAL:
      return action.data;
    default:
      return state;
  }
}
function user(state = {}, action) {
  switch (action.type) {
    case USER:
      return action.data;
    default:
      return state;
  }
}
function auth(state = {auth: false}, action) {
  switch (action.type) {
    case SIGN_IN:
      return action.data;
    default:
      return state;
  }
}
export const finalReducer = combineReducers({
  cooking,
  recreational,
  user,
  auth
});