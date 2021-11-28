import React, { useState } from "react";


import { connect } from "react-redux";
import { changeChatbotAction } from "../../../../actions";
import "./ChatbotList.scss";

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
            <li id="chatBotSearch">
                <div className="d-flex justify-content-center">
                    <input className="align-self-center" type="text" placeholder="Search...">
                    </input>
                </div>
                    
            </li>
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
