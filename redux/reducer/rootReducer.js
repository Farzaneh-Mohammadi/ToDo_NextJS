const { combineReducers } = require("redux");

import todoReducer from "./todoSlice";

export const rootReducer = combineReducers({ todo: todoReducer });
