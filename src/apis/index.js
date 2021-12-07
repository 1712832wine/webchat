import axios from "axios";

const apis = {
    send_message_to_chatterbot: (data) => {
        return axios.post("http://localhost:5000/api/messages/send", data);
    },
    send_message_to_rasa: (data) => {
        return axios.post("http://localhost:5005/webhooks/rest/webhook", data);
    },
};
export default apis;
