import { CHANGE_CHATBOT, CHANGE_ROUTE } from "../constants/action-types";

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
        case CHANGE_ROUTE:
            return {
                ...state,
                isOpenChatbot: false,
            };
        default:
            return state;
    }
}

export default chatbotsReducer;
