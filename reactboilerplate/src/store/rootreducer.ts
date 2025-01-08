import { combineReducers } from "@reduxjs/toolkit";
import authenticatorSlice from "../features/authentication/authslice/authSlice"

const reducer = combineReducers({
  authenticatorSlice,

});

const rootReducer = (state, action) => {
  if (action.type === "RESET_STORE") {
    return reducer(undefined, action);
  }

  return reducer(state, action);
};

export default rootReducer;
