import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "./Avatar/Avatar";
import routers from "../../../routers";
import { Col } from "react-bootstrap";


import "./Nav.scss";

export default function Nav() {
    return (
        <Col id="mynav" sm="auto">
            <Avatar />
            <div className="mynav">
                {routers.map((router) => {
                    return (
                        <NavLink
                            className="navlink text-center"
                            activeClassName={"active"}
                            to={router.path}
                            key={router.path}
                        >
                            {router.icon}
                        </NavLink>
                    );
                })}
            </div>
        </Col>
    );
}
