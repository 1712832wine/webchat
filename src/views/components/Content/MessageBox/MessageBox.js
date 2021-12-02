// libs
import React, { useState, useEffect } from "react";
// components
import MessageBoxTitle from "./MessageBoxTitle/MessageBoxTitle";
import MessageBoxContent from "./MessageBoxContent/MessageBoxContent";
import MessageBoxTexting from "./MessageBoxTexting/MessageBoxTexting";

import { getLocalStorage } from "../../../../helper"

// others
import "./MessageBox.scss";


export default function MessageBox({ chatbot_id }) {
    const [messageList, setMessageList] = useState([]);
    const [response_message] = useState("");

    useEffect(() => {
        var temp_list = getLocalStorage(chatbot_id);
        if (temp_list) setMessageList(temp_list); else setMessageList([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chatbot_id]);

    return (
        <div className="message-box">
            <MessageBoxTitle />
            <MessageBoxContent messageList={messageList} />
            <MessageBoxTexting
                chatbot_id={chatbot_id}
                messageList={messageList}
                setMessageList={setMessageList}
                response_message={response_message}
            />
        </div>
    );
}
