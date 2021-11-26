import React from "react";
import "./Avatar.scss";

export default function Avatar() {
    return (
        <div title="Nguyễn Thị Ngọc Tuyền">
            <div className="avatar-box" style={{ background: "transparent" }}>
                <img
                    className="avatar"
                    src="https://s120-ava-talk.zadn.vn/0/6/c/b/14/120/7b32f6befc50581b21445c1f18d29240.jpg"
                    alt="This is avatar"
                />
            </div>
        </div>
    );
}
