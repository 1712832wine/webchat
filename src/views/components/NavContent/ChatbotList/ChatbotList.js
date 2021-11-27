import React, { useState } from "react";

import "./ChatbotList.scss";
import { connect } from "react-redux";
import { changeChatbotAction } from "../../../../actions";

const chatbots = [
    {
        id: 1,
        name: "Chatbot 1",
    },
    {
        id: 2,
        name: "Chatbot 2",
    },
];

function ChatbotList({ changeChatbotAction }) {
    const [currentChatbot, setChatbot] = useState();
    const ChangeChatbot = (id, name, e) => {
        if (id !== currentChatbot) {
            setChatbot(id);
            changeChatbotAction({ id, name });
        }
    };
    return (
        <ul className="chatbot-list">
            <h6 className="my-2 ps-2">Chatbot List</h6>
            {chatbots.map((chatbot) => {
                return (
                    <li
                        className={
                            "d-flex chatbot px-3 " +
                            (currentChatbot === chatbot.id ? "active" : "")
                        }
                        onClick={(e) =>
                            ChangeChatbot(chatbot.id, chatbot.name, e)
                        }
                        key={chatbot.id}
                    >
                        <div
                            className="avatar-box me-2"
                            style={{ background: "transparent" }}
                        >
                            <img
                                className="avatar"
                                alt={chatbot.name}
                                src="https://s120-ava-talk.zadn.vn/0/6/c/b/14/120/7b32f6befc50581b21445c1f18d29240.jpg"
                            />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-100">
                            <div className="chatbot-name">{chatbot.name}</div>
                            <div className="last-message">Message 1</div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
export default connect(null, { changeChatbotAction })(ChatbotList);
