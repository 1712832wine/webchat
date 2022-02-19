// libs
import React from "react";
// components
import Message from "./Message/Message";
// others
import "./MessageBoxContent.scss";

export default function index({ messageList }) {

    return (
        <div className="message-box-content flex-grow-1">
            {messageList.map(({ text, type }) => (
                <Message key={Math.random()} text={text} type={type} />
            ))}
        </div>
    );
}
