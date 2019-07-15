import { GET_API_COOKING, GET_API_RECREATIONAL, USER, SIGN_IN } from "./action-type";
import axios from "axios";

export const cooking = name => ({ type: GET_API_COOKING, data: name });
export const setUser = name => ({ type: USER, data: name });
export const login = name => ({ type: SIGN_IN, data: name })

export const recreational = name => {
  return { type: GET_API_RECREATIONAL, data: name };
};
export const getCookingAsync = name => {
  return async dispatch => {
    try {
      let res = await axios.get("https://www.boredapi.com/api/activity/", {
        params: { type: name }
      });
      dispatch(cooking(res.data));
    } catch (e) {
      dispatch(cooking(e));
    }
  };
};
export const getRecreationalAsync = name => {
  return async dispatch => {
    try {
      let res = await axios.get("https://www.boredapi.com/api/activity/", {
        params: { type: name }
      });
      dispatch(recreational(res.data));
    } catch (e) {
      dispatch(recreational(e));
    }
  };
};