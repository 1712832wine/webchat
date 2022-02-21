import axios from "axios";

const apis = {
    send_message: (url, data) => {
        return axios.post(url, data);
    },
};
export default apis;
