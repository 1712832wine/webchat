import { CHANGE_CHATBOT, HIDE_CHATBOT } from "../constants/action-types";

var initialState = {
    id: null,
    name: "",
    isOpenChatbot: false,
    list_messages: [],
};

function chatbotsReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CHATBOT:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                isOpenChatbot: true,
            };
        case HIDE_CHATBOT:
            return {
                ...state,
                isOpenChatbot: false,
            };
        default:
            return state;
    }
}

export default chatbotsReducer;
