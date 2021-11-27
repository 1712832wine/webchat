import { CHANGE_CHATBOT } from "../constants/action-types";

var initialState = {
    id: null,
    name: "",
    list_messages: [],
};

function chatbotsReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CHATBOT:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
            };
        default:
            return state;
    }
}

export default chatbotsReducer;
