import React, { useState } from "react";

import "./ChatbotList.scss";

import Chatbotitem from "./ChatbotItem/ChatbotItem";

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

function ChatbotList() {
  const [currentChatbot, setChatbot] = useState();

  return (
    <div>
      <h6 className="px-2 py-3">Chatbot List</h6>
      <ul className="chatbot-list">
        {chatbots.map((chatbot) => {
          return (
            <Chatbotitem chatbot={chatbot} currentChatbot={currentChatbot} setChatbot={setChatbot} key={chatbot.id} />
          );
        })}
      </ul>
    </div>

  );
}
export default ChatbotList;
