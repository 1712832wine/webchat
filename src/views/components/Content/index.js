import React from "react";
import "./style.scss";
import MyCarousel from "./MyCarousel";

export default function index() {
    return (
        <div id="content" className="col d-none d-md-block">
            <MyCarousel />
        </div>
    );
}
