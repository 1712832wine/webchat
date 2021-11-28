// libs
import React, { useState } from "react";
// components
import MessageBoxTitle from "./MessageBoxTitle/MessageBoxTitle";
import MessageBoxContent from "./MessageBoxContent/MessageBoxContent";
import MessageBoxTexting from "./MessageBoxTexting/MessageBoxTexting";
import MessageBoxAttach from "./MessageBoxAttach/MessageBoxAttach";
// others
import "./MessageBox.scss";

export default function MessageBox() {
    const [messageList, setMessageList] = useState([]);
    const [response_message] = useState("");
    return (
        <div className="message-box">
            <MessageBoxTitle />
            <MessageBoxContent messageList={messageList} />
            <MessageBoxTexting
                messageList={messageList}
                setMessageList={setMessageList}
                response_message={response_message}
            />
        </div>
    );
}
