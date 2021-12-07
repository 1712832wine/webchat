import apis from "../apis";
import {
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILED,
    SEND_MESSAGE_FINISHED,
} from "../constants/action-types";

const sendMessageAction = (data) => (dispatch) => {
    // notify SEND_MESSAGE action start
    dispatch({
        type: SEND_MESSAGE,
    });
    // call api SEND_MESSAGE
    if (data.chatbot_id === 1) {
        console.log("call api send_message_to_chatterbot")
        apis.send_message_to_chatterbot(data)
            .then((res) => {
                const { data } = res;
                if (data.success) {
                    dispatch({
                        type: SEND_MESSAGE_SUCCESS,
                        payload: {
                            response_message: data.response_message,
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
    } else {
        console.log("call api send_message_to_rasa")
        apis.send_message_to_rasa(data)
            .then((res) => {
                const { data } = res;
                console.log(data)
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
    }

};

export { sendMessageAction };
