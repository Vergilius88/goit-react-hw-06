import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import action from "./phoneBook-action";

const contacts = createReducer([], {
  [action.addContact]: (state, { payload }) => [...state, payload],
  [action.removeContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [action.findContact]: (_state, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
