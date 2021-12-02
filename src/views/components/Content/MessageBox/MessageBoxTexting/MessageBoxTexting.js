// libs
import React, { useEffect, useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";

import { connect } from "react-redux";
import { sendMessageAction } from "../../../../../actions";

import { setLocalStorage } from "../../../../../helper";
// others
import "./MessageBoxTexting.scss";

function MessageBoxTexting({
    sendMessageAction,
    messageList,
    setMessageList,
    response_message,
    isLoading,
    chatbot_id
}) {
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const text = message.trim();
        if (text !== "") {
            const list = messageList;
            const newList = [{ text, type: 1 }, ...list];
            setMessageList(newList);
            setMessage("");
            setLocalStorage(chatbot_id, newList);
            sendMessageAction({ message: text });
        }
    };
    useEffect(() => {
        if (response_message !== "") {
            const list = messageList;
            const newList = [{ type: 2, text: response_message }, ...list];
            setMessageList(newList);
            setLocalStorage(chatbot_id, newList);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response_message]);
    const handleChange = (e) => {
        setMessage(e.target.value);
    };
    return (
        <Form className="p-3" onSubmit={handleSubmit}>
            <Stack direction="horizontal" gap={2}>
                <Form.Control
                    value={message}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter message"
                />
                <Button variant="primary" type="submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send"}
                </Button>
            </Stack>
        </Form>
    );
}

function mapStateToProps(state) {
    return {
        isLoading: state.response.isLoading,
        response_message: state.response.response_message,
    };
}

export default connect(mapStateToProps, { sendMessageAction })(
    MessageBoxTexting
);
