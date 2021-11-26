// libs
import React from "react";
import { RobotOutlined, UserOutlined } from "@ant-design/icons";
// others
import "./Message.scss";

export default function Message({ text, type }) {
    return (
        <div
            className={
                type === 1
                    ? "message-yourself-wrapper"
                    : "message-respone-wrapper"
            }
        >
            <div className="message-yourself">
                <div className="message-yourself-avatar">
                    {type === 1 ? <UserOutlined /> : <RobotOutlined />}
                </div>
                <div className="message-yourself-text">{text}</div>
            </div>
        </div>
    );
}
