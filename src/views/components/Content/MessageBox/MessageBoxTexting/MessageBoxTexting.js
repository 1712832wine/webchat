// libs
import React, { useEffect, useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { sendMessageAction } from "../../../../../actions";
// others
import "./MessageBoxTexting.scss";

function MessageBoxTexting({
    messageList,
    setMessageList,
    response_message,
    sendMessageAction,
}) {
    const [message, setMessage] = useState("");
    const handleSubmit = () => {
        // e.preventDefault();
        const text = message.trim();
        if (text !== "") {
            const list = messageList;
            const newList = [{ text, type: 1 }, ...list];
            setMessageList(newList);
            setMessage("");
            console.log(text);
            sendMessageAction({ text });
        }
    };
    useEffect(() => {
        const list = messageList;
        const newList = [{ type: 2, text: "fdsfslafasdf" }, ...messageList];
        setMessageList(newList);
    }, [response_message]);
    const handleChange = (e) => {
        setMessage(e.target.value);
    };
    return (
        <div className="message-box-texting-wrapper">
            <div className="message-box-texting">
                <form className="message-box-form" onSubmit={handleSubmit}>
                    <input
                        className="message-box-texting-input"
                        value={message}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        placeholder="Nhập nội dung tin nhắn"
                    ></input>
                    <div className="message-box-btn-send">
                        <SendOutlined onClick={handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        response_message: state.messages.response_message,
    };
}

export default connect(mapStateToProps, { sendMessageAction })(
    MessageBoxTexting
);
