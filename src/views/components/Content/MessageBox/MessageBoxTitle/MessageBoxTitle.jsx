// libs
import React from "react";
// components
import { RobotOutlined } from "@ant-design/icons";
// useContext
// others
import "./MessageBoxTitle.scss";

export default function MessageBoxTitle() {
    return (
        <div className="message-box-title-wrapper">
            <div className="message-box-title">
                <div className="message-box-avatar">
                    <RobotOutlined />
                </div>
                <div className="message-box-info">Chatbot1 </div>
            </div>
        </div>
    );
}
