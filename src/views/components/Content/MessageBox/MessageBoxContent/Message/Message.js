// libs
import React from "react";
import { RobotOutlined, UserOutlined } from "@ant-design/icons";
import { Card } from "react-bootstrap";
import { Image } from 'antd';
import { Menu, Dropdown } from 'antd';
import { SaveOutlined } from "@ant-design/icons";
// others
import "./Message.scss";

const saveMessage = () => {
    console.log("saving message")
}
const menu = (
    <Menu>
        <Menu.Item primary key="reset" icon={<SaveOutlined />} onClick={saveMessage}>Save this message</Menu.Item>
    </Menu>
);

const singleMessage = (text, type, recipient_id, image) => (
    <div
        key={Math.random()}
        className={
            type === 1 ? "message-user-wrapper" : "message-bot-wrapper"
        }
    >
        <div className="message-avatar">
            {type === 1 ? <UserOutlined /> : <RobotOutlined />}
        </div>
        <Dropdown overlay={menu}>
            <Card className="cursor-pointer mw-50">
                <Card.Body className="message-text">
                    {
                        image ?
                            <Image
                                width={200}
                                src={image}
                            /> :
                            text
                    }
                </Card.Body>
            </Card>
        </Dropdown>

    </div>
)

export default function Message({ text, type }) {
    return (
        <>
            {
                (Array.isArray(text)) ?
                    (
                        // multiple message
                        text.slice(0).reverse().map(({ text, recipient_id, image }) => (
                            singleMessage(text, type, recipient_id, image)
                        ))
                    ) :
                    (
                        // single message
                        singleMessage(text, type)
                    )
            }
        </>
    );
}
