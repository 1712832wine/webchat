import { CHANGE_CHATBOT, HIDE_CHATBOT } from "../constants/action-types";

const changeChatbotAction = (data) => (dispatch) => {
    dispatch({
        type: CHANGE_CHATBOT,
        payload: {
            id: data.id,
            name: data.name,
        },
    });
};
const changeRouteAction = (data) => (dispatch) => {
    if (data.isOpenChatbot) {
        dispatch({
            type: HIDE_CHATBOT,
        });
    }
};


export { changeChatbotAction, changeRouteAction };
