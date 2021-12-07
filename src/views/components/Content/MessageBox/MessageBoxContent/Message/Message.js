// libs
import React from "react";
import { RobotOutlined, UserOutlined } from "@ant-design/icons";
import { Card } from "react-bootstrap";
import { Image } from 'antd';
// others
import "./Message.scss";

export default function Message({ text, type }) {
    return (
        <>
            {
                (Array.isArray(text)) ?
                    // multiple response message
                    text.map(({ text, recipient_id, image }) => (
                        <div
                            key={text}
                            className={
                                type === 1 ? "message-user-wrapper" : "message-bot-wrapper"
                            }
                        >
                            <div className="message-avatar">
                                {type === 1 ? <UserOutlined /> : <RobotOutlined />}
                            </div>
                            <Card>
                                <Card.Body className="message-text">
                                    {
                                        image ?
                                            <Image
                                                width={200}
                                                src={image}
                                            /> :
                                            text
                                    }
                                </Card.Body>
                            </Card>
                        </div>
                    )) :
                    (
                        // single response message
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
                    )
            }
        </>
    );
}
