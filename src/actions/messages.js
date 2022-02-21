import apis from "../apis";
import {
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILED,
    SEND_MESSAGE_FINISHED,
} from "../constants/action-types";

const getURL = (chatbot_id) => {
    if (chatbot_id === 1)
        return "http://localhost:5000/api/messages/send"
    else
        return "http://localhost:5005/webhooks/rest/webhook"
}

const sendMessageAction = (data) => (dispatch) => {
    // notify SEND_MESSAGE action start
    dispatch({
        type: SEND_MESSAGE,
    });

    // call api SEND_MESSAGE
    apis.send_message(getURL(data.chatbot_id), data)
        .then((res) => {
            const { data } = res;
            if (data) {
                dispatch({
                    type: SEND_MESSAGE_SUCCESS,
                    payload: {
                        response_message: data,
                    },
                });
            } else {
                dispatch({
                    type: SEND_MESSAGE_FAILED,
                    payload: {
                        message: data.message,
                    },
                });
            }
            dispatch({
                type: SEND_MESSAGE_FINISHED,
            });
        })
        .catch(() => {
            dispatch({
                type: SEND_MESSAGE_FAILED,
                payload: {
                    message: "Something went wrong!!",
                },
            });
        });

};

export { sendMessageAction };
