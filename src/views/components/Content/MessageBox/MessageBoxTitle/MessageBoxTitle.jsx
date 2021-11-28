// libs
import React from "react";
// components
import { RobotOutlined } from "@ant-design/icons";
import { Stack } from "react-bootstrap";
// others
import "./MessageBoxTitle.scss";
import { connect } from "react-redux";

function MessageBoxTitle({ name }) {
    return (
        <Stack direction="horizontal" gap={2} className="p-3">
            <div className="message-box-avatar">
                <RobotOutlined />
            </div>
            <div className="message-box-info">{name}</div>
        </Stack>
    );
}
function mapStateToProps(state) {
    return {
        name: state.chatbots.name,
    };
}
export default connect(mapStateToProps)(MessageBoxTitle);
