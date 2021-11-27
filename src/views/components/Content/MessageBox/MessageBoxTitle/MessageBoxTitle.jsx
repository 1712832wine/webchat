// libs
import React from "react";
// components
import { RobotOutlined } from "@ant-design/icons";
// useContext
// others
import "./MessageBoxTitle.scss";
import { connect } from "react-redux";

function MessageBoxTitle({ name }) {
    return (
        <div className="message-box-title-wrapper">
            <div className="message-box-title">
                <div className="message-box-avatar">
                    <RobotOutlined />
                </div>
                <div className="message-box-info">{name} </div>
            </div>
        </div>
    );
}
function mapStateToProps(state) {
    return {
        name: state.chatbots.name,
    };
}
export default connect(mapStateToProps)(MessageBoxTitle);
