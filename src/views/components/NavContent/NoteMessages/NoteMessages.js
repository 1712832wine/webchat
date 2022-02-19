import React from 'react'
import "./NoteMessages.scss";
import Message from "../../Content/MessageBox/MessageBoxContent/Message/Message"
export default function NoteMessages() {
    return (
        <div>
            <h6 className="px-2 py-3">Notes messages</h6>
            <div className="pt-2">

                <Message key={Math.random()} text={"Đây là tin nhắn quan trọng, được lưu lại"} type={1} />
                <hr />
                <Message key={Math.random()} text={"Đây là tin nhắn quan trọng thứ 2, được lưu lại"} type={1} />
            </div>

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
