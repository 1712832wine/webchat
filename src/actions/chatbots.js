import { CHANGE_CHATBOT, HIDE_CHATBOT } from "../constants/action-types";

const changeChatbotAction = (data) => (dispatch) => {
    dispatch({
        type: CHANGE_CHATBOT,
        payload: {
            id: data.id,
            name: data.name,
        },
    });
    localStorage.setItem('chatbot_id', data.id);
    localStorage.setItem('isOpenChatbot', 'true');
};
const changeRouteAction = (data) => (dispatch) => {
    if (data.isOpenChatbot) {
        dispatch({
            type: HIDE_CHATBOT,
        });
    }
    localStorage.setItem('isOpenChatbot', 'false');
};


export { changeChatbotAction, changeRouteAction };
