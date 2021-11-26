import { combineReducers } from "redux";

import messagesReducer from "./messages";

let reducersAll = combineReducers({
    messages: messagesReducer,
});

export default reducersAll;
