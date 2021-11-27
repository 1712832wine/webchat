import { CHANGE_CHATBOT } from "../constants/action-types";

const changeChatbotAction = (data) => (dispatch) => {
    dispatch({
        type: CHANGE_CHATBOT,
        payload: {
            id: data.id,
            name: data.name,
        },
    });
};

export { changeChatbotAction };
