import { CHANGE_CHATBOT, CHANGE_ROUTE } from "../constants/action-types";

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
            type: CHANGE_ROUTE,
        });
    }
};


export { changeChatbotAction, changeRouteAction };
