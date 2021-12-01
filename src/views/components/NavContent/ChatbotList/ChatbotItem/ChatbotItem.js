import React from 'react';
import { Image, Stack } from "react-bootstrap";

import { connect } from "react-redux";
import { changeChatbotAction } from "../../../../../actions";

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
                "d-flex chatbot px-3 " +
                (currentChatbot === chatbot.id ? "active" : "")
            }
            onClick={(e) =>
                ChangeChatbot(chatbot.id, chatbot.name, e)
            }
        >
            <Stack
                className="avatar-box"
                direction="horizontal"
                gap={2}
            >
                <Image
                    className="avatar"
                    alt={chatbot.name}
                    src="https://s120-ava-talk.zadn.vn/0/6/c/b/14/120/7b32f6befc50581b21445c1f18d29240.jpg"
                />
                <Stack className="justify-content-center">
                    <div className="chatbot-name">{chatbot.name}</div>
                    <div className="last-message">Message 1</div>
                </Stack>
            </Stack>
        </li>
    );
}

export default connect(null, { changeChatbotAction })(ChatbotItem);
