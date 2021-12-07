import React from "react";
import "./Avatar.scss";
import { Image } from "react-bootstrap";

export default function Avatar() {
    return (
        <div className="avatar-box" style={{ background: "transparent" }}>
            <Image
                src="./logo.jpg"
                roundedCircle
                className="avatar"
            />
        </div>
    );
}
