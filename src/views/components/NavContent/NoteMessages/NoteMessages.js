import React, { useState, useEffect } from 'react'
import "./NoteMessages.scss";
import Message from "../../Content/MessageBox/MessageBoxContent/Message/Message"
import { getLocalStorage, setLocalStorage } from "../../../../helper/index"
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons"
import { Modal } from "antd"

const { confirm, success } = Modal;

export default function NoteMessages() {
    const [saved_messages, setSavedMessages] = useState([]);
    useEffect(() => {
        console.log('useEffect has been called!');
        var temp = getLocalStorage('saved_messages');
        // console.log(temp)
        if (temp === undefined) temp = []
        // console.log(temp)
        setSavedMessages(temp);
    }, []);

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
        <div>
            <h6 className="px-2 py-3 d-flex justify-content-between">Notes messages
                <DeleteOutlined className="delete-icon" onClick={showConfirm} /></h6>



            {saved_messages.map((item) => (
                <div className="pt-2 mw-70" key={Math.random()}>
                    <Message text={item.text} type={item.type} isSaved={"true"} />
                </div>
            ))}
            {/* <Message key={Math.random()} text={"Đây là tin nhắn quan trọng, được lưu lại"} type={1} />
                <hr />
                <Message key={Math.random()} text={"Đây là tin nhắn quan trọng thứ 2, được lưu lại"} type={1} /> */}


            {/* <div className="px-2 content">
                <Card>
                    <Card.Body className="message-text">
                        Đây là tin nhắn quan trọng, được lưu lại
                    </Card.Body>
                </Card>
            </div> */}

        </div>
    )
}
