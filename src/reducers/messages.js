import {
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILED,
} from "../constants/action-types";

var initialState = {
    isLoading: false,
    errMessage: "",
    response_message: "",
};

function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return { ...state, errMessage: "", isLoading: true };
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                response_message: action.payload.response_message,
            };

        case SEND_MESSAGE_FAILED:
            return {
                ...state,
                isLoading: false,
                errMessage: action.payload.message,
            };
        default:
            return state;
    }
}

export default messagesReducer;
