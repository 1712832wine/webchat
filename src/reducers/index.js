import { combineReducers } from "redux";

import sendmessagesReducer from "./messages";
import chatbotsReducer from "./chatbots";

let reducersAll = combineReducers({
    response: sendmessagesReducer,
    chatbots: chatbotsReducer,
});

export default reducersAll;
