import React from 'react';
import { Stack } from "react-bootstrap";

import { connect } from "react-redux";
import { changeChatbotAction } from "../../../../../actions";
import { Avatar } from "antd"
import { RobotOutlined } from "@ant-design/icons"

import "./ChatbotItem.scss"

const ChatbotItem = ({ chatbot, currentChatbot, setChatbot, changeChatbotAction }) => {
    const ChangeChatbot = (id, name, e) => {
        if (id !== currentChatbot) {
            setChatbot(id);
            changeChatbotAction({ id, name });
        }
    };
    return (
        <li
            className={
                "d-flex chatbot px-3 py-2 " +
                (currentChatbot === chatbot.id ? "active" : "")
            }
            onClick={(e) =>
                ChangeChatbot(chatbot.id, chatbot.name, e)
            }
        >
            <Stack
                className="avatar-chatbot-box w-100"
                direction="horizontal"
                gap={2}
            >
                <Avatar className="avatar" size="large" icon={<RobotOutlined />} />
                <Stack className="justify-content-center flex-grow-1">
                    <div className="chatbot-name">{chatbot.name}</div>
                    <div className="last-message">chat with {chatbot.name} here</div>
                </Stack>
            </Stack>
        </li>
    );
}

export default connect(null, { changeChatbotAction })(ChatbotItem);
