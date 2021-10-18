import React, { Component } from "react";
import "./style.scss";

export default class index extends Component {
    render() {
        return (
            <ul className="chatbot-list">
                <h6 className="my-2 ps-2">Chatbot List</h6>

                <li className="d-flex chatbot active px-3">
                    <div
                        className="avatar-box me-2"
                        style={{ background: "transparent" }}
                    >
                        <img
                            className="avatar"
                            src="https://s120-ava-talk.zadn.vn/0/6/c/b/14/120/7b32f6befc50581b21445c1f18d29240.jpg"
                        />
                    </div>
                    <div className="d-flex flex-column justify-content-center w-100">
                        <div className="chatbot-name">Chatbot 1</div>
                        <div className="last-message">Message 1</div>
                    </div>
                </li>

                <li className="d-flex chatbot px-3">
                    <div
                        className="avatar-box me-2"
                        style={{ background: "transparent" }}
                    >
                        <img
                            className="avatar"
                            src="https://s120-ava-talk.zadn.vn/0/6/c/b/14/120/7b32f6befc50581b21445c1f18d29240.jpg"
                        />
                    </div>
                    <div className="d-flex flex-column justify-content-center w-100">
                        <div className="chatbot-name">Chatbot 2</div>
                        <div className="last-message">Message 3</div>
                    </div>
                </li>
            </ul>
        );
    }
}
