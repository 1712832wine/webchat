// libs
import React from "react";
import { RobotOutlined, UserOutlined } from "@ant-design/icons";
import { Card } from "react-bootstrap";
// others
import "./Message.scss";

export default function Message({ text, type }) {
    return (
        <div
            className={
                type === 1 ? "message-user-wrapper" : "message-bot-wrapper"
            }
        >
            <div className="message-avatar">
                {type === 1 ? <UserOutlined /> : <RobotOutlined />}
            </div>
            <Card>
                <Card.Body className="message-text">{text}</Card.Body>
            </Card>
        </div>
    );
}
