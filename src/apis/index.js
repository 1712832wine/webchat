import axios from "axios";

const apis = {
    send_message: (data) => {
        return axios.post("http://localhost:5000/api/messages/send", data);
    },
};
export default apis;
