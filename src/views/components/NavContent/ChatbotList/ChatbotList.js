import React, { useState } from "react";

import { connect } from "react-redux";
import { changeChatbotAction } from "../../../../actions";
import { Image } from "react-bootstrap";

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
            <h6 className="px-2 py-3">Chatbot List</h6>
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
                            <Image
                                className="avatar"
                                alt={chatbot.name}
                                src="https://cdn-icons.flaticon.com/png/512/2938/premium/2938406.png?token=exp=1638089007~hmac=7842a41680ac58a569a21ef9c128938c"
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
