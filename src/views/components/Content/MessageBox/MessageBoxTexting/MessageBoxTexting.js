// libs
import React, { useEffect, useState } from "react";
import { SendOutlined } from "@ant-design/icons";
// others
import "./MessageBoxTexting.scss";

export default function MessageBoxTexting({ messageList, setMessageList }) {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = value.trim();
        if (text !== "") {
            const list = messageList;
            const newList = [{ text, type: 1 }, ...list];
            setMessageList(newList);
            setValue("");
        }
    };
    useEffect(() => {
        if (result !== "") {
            const list = messageList;
            const newList = [{ type: 2, text: result }, ...list];
            setMessageList(newList);
            setResult("");
        }
    }, [result, setResult, messageList, setMessageList]);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className="message-box-texting-wrapper">
            <div className="message-box-texting">
                <form className="message-box-form" onSubmit={handleSubmit}>
                    <input
                        className="message-box-texting-input"
                        value={value}
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
