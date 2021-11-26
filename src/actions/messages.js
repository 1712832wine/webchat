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
    apis.send_message(data)
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
};

export { sendMessageAction };
