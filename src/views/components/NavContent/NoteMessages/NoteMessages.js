import React, { useState, useEffect } from 'react'
import "./NoteMessages.scss";
import Message from "../../Content/MessageBox/MessageBoxContent/Message/Message"
import { getLocalStorage, setLocalStorage } from "../../../../helper/index"
import { DeleteOutlined, ExclamationCircleOutlined, ReloadOutlined } from "@ant-design/icons"
import { Modal } from "antd"

const { confirm, success } = Modal;

export default function NoteMessages() {

    const [reload, setReload] = useState(false);

    const handleReload = () => {
        setReload(!reload)
    }
    const fetchSavedMessage = () => {
        console.log('useEffect has been called!');
        var temp = getLocalStorage('saved_messages');
        if (!temp) temp = []
        return temp;
    }

    const showConfirm = () => {
        confirm({
            title: 'Do you want to delete all saved messages?',
            icon: <ExclamationCircleOutlined />,
            content: 'All saved messages will be permanently deleted.',
            okText: 'Delete',
            onOk() {
                setLocalStorage('saved_messages', [])
                success({
                    content: 'Delete success.',
                });
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    return (
        <div className="d-flex flex-column height-100">
            <h6 className="px-2 py-3 d-flex justify-content-between">Notes messages
                <div>
                    <ReloadOutlined className="mx-2 reload-icon" onClick={handleReload} />
                    <DeleteOutlined className="delete-icon" onClick={showConfirm} />
                </div>

            </h6>

            <div className="flex-grow-1 list-messages">
                {fetchSavedMessage().map((item) => (
                    <div className="pt-2 mw-70" key={Math.random()}>
                        <Message text={item.text} type={item.type} isSaved={"true"} />
                    </div>
                ))}
            </div>
        </div>
    )
}
