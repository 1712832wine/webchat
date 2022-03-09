// libs
import React from "react";
// components
import { RobotOutlined, MenuOutlined, RetweetOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Stack } from "react-bootstrap";
import { Menu, Dropdown, Modal, Avatar } from 'antd';

// others
import "./MessageBoxTitle.scss";
import { connect } from "react-redux";
import { setLocalStorage } from "../../../../../helper";

const { confirm, success } = Modal;

function MessageBoxTitle({ name, chatbot_id, setMessageList }) {
    const resetChatbot = () => {
        const promise = new Promise((resolve, reject) => {
            setLocalStorage(chatbot_id, []);
            setMessageList([]);
            resolve('success');
        });
        promise.then((value) => {
            showSuccess();
        });
    }

    const showSuccess = () => {
        success({
            content: 'Reset success.',
        });
    }

    const showConfirm = () => {
        confirm({
            title: 'Do you want to reset this chatbot?',
            icon: <ExclamationCircleOutlined />,
            content: 'This chatbot will be reset, all data of this chatbot will be delete.',
            okText: 'Reset',
            onOk() {
                resetChatbot()
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const menu = (
        <Menu>
            <Menu.Item key="reset" icon={<RetweetOutlined />} onClick={showConfirm}>Reset this chatbot</Menu.Item>
        </Menu>
    );
    return (
        <Stack direction="horizontal" gap={2} className="p-3">
            <Avatar src="./logo.jpg" className="avatar avatar-title" size="large" icon={<RobotOutlined />} />
            <div className="message-box-info">{name}</div>

            <Dropdown overlay={menu} trigger={['click']}>
                <MenuOutlined className="ms-auto font-size cursor-pointer" onClick={e => e.preventDefault()} />
            </Dropdown>
        </Stack>
    );
}
function mapStateToProps(state) {
    return {
        name: state.chatbots.name,
    };
}
export default connect(mapStateToProps)(MessageBoxTitle);
