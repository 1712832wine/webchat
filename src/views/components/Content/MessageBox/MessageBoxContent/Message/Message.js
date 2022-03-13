// libs
import React from "react";
import { RobotOutlined, UserOutlined } from "@ant-design/icons";
import { Card } from "react-bootstrap";
import { Image } from 'antd';
import { Menu, Dropdown, Modal, Avatar } from 'antd';
import { SaveOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { setLocalStorage, getLocalStorage } from "../../../../../../helper/index"

// others
import "./Message.scss";

const { confirm, success } = Modal;

const removeSavedMessage = (text, type, chatbot_id) => {
    var saved_messages = getLocalStorage('saved_messages')
    if (!saved_messages) {
        saved_messages = []
    }
    var temp = { text: text, type: type, chatbot_id: chatbot_id }
    for (var i = 0; i < saved_messages.length; i++) {
        if (saved_messages[i].text === temp.text) {
            saved_messages.splice(i, 1)
            break;
        }
    }
    setLocalStorage('saved_messages', saved_messages)
}
const saveMessage = (text, type, chatbot_id) => {
    var saved_messages = getLocalStorage('saved_messages')
    if (!saved_messages) {
        saved_messages = []
    }
    saved_messages.push({ text: text, type: type, chatbot_id: chatbot_id })
    setLocalStorage('saved_messages', saved_messages)
    success({
        content: 'Save success.',
    });
}

const showConfirm = (text, type, chatbot_id) => {
    confirm({
        title: 'Do you want to remove this message from your saved messages?',
        icon: <ExclamationCircleOutlined />,
        content: 'This message will be removed from your saved messages',
        okText: 'Delete',
        onOk() {
            removeSavedMessage(text, type, chatbot_id)
            success({
                content: 'Delete success.',
            });
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}
const menu = (text, type, chatbot_id, isNotSaved) => (
    <Menu>
        {
            (isNotSaved !== undefined) ?
                (
                    < Menu.Item key="reset" icon={<SaveOutlined />} onClick={() => saveMessage(text, type, chatbot_id)}>Save this message</Menu.Item>

                ) :
                (
                    < Menu.Item danger key="reset" icon={<DeleteOutlined />} onClick={() => showConfirm(text, type, chatbot_id)}>Remove this message from here</Menu.Item>
                )
        }
    </Menu >
);

const singleMessage = (text, type, recipient_id, image, chatbot_id, isNotSaved) => (
    <div
        key={Math.random()}
        className={
            type === 1 ? "message-user-wrapper" : "message-bot-wrapper"
        }
    >

        {type === 1 ?

            <Avatar className="avatar"
                size="large" icon={<UserOutlined />} /> : <Avatar src="./logo.jpg" className="avatar" size="large" icon={<RobotOutlined />} />}
        {image ?
            <Card className="user-message cursor-pointer mw-50 mw-50-mobile" >
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
            :
            <Dropdown overlay={menu(text, type, chatbot_id, isNotSaved)} >
                <Card className="user-message cursor-pointer mw-50 mw-50-mobile" >
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
        }

    </div >
)

function Message({ text, type, chatbot_id, isNotSaved }) {
    return (
        <>
            {
                (Array.isArray(text)) ?
                    (
                        // multiple message
                        text.slice(0).reverse().map(({ text, recipient_id, image }) => (
                            singleMessage(text, type, recipient_id, image, chatbot_id, isNotSaved)
                        ))
                    ) :
                    (
                        // single message
                        singleMessage(text, type, null, null, chatbot_id, isNotSaved)
                    )
            }
        </>
    );
}

function mapStateToProps(state) {
    return {
        chatbot_id: state.chatbots.id,
    };
}
export default connect(mapStateToProps)(Message);