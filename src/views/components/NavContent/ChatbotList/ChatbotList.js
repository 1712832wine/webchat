import React from "react";

import routers from "../../../../routersChatbot";
import { NavLink } from "react-router-dom";
import "./ChatbotList.scss";

export default function ChatbotList() {
    return (
        <ul className="chatbot-list">
            <h6 className="my-2 ps-2">Chatbot List</h6>
            {routers.map((router) => {
                return (
                    <NavLink
                        className="d-flex chatbot px-3"
                        activeClassName={"active"}
                        to={router.path}
                        key={router.path}
                    >
                        <div
                            className="avatar-box me-2"
                            style={{ background: "transparent" }}
                        >
                            <img
                                className="avatar"
                                alt={router.name}
                                src="https://s120-ava-talk.zadn.vn/0/6/c/b/14/120/7b32f6befc50581b21445c1f18d29240.jpg"
                            />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-100">
                            <div className="chatbot-name">{router.name}</div>
                            <div className="last-message">Message 1</div>
                        </div>
                    </NavLink>
                );
            })}
        </ul>
    );
}
