// libs
import React, { useState } from "react";
// components
import MessageBoxTitle from "./MessageBoxTitle/MessageBoxTitle";
import MessageBoxContent from "./MessageBoxContent/MessageBoxContent";
import MessageBoxTexting from "./MessageBoxTexting/MessageBoxTexting";
// others
import "./MessageBox.scss";

export default function MessageBox() {
    const [messageList, setMessageList] = useState([]);
    return (
        <div className="message-box-wrapper">
            <div className="message-box">
                <MessageBoxTitle />
                <MessageBoxContent messageList={messageList} />
                <MessageBoxTexting
                    messageList={messageList}
                    setMessageList={setMessageList}
                />
            </div>
        </div>
    );
}
