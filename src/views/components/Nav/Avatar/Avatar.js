import React from "react";
import "./Avatar.scss";

export default function Avatar() {
    return (
        <div title="User 1">
            <div className="avatar-box" style={{ background: "transparent" }}>
                <img
                    className="avatar"
                    src="https://cdn-icons-png.flaticon.com/512/2467/2467352.png"
                    alt="This is avatar"
                />
            </div>
        </div>
    );
}
