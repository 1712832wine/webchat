import React from "react";
import { Switch, NavLink, Route, Redirect } from "react-router-dom";
import Avatar from "./Avatar/Avatar";
import routers from "../../../routers";
import { Col } from "react-bootstrap";
import "./Nav.scss";

export default function Nav() {
    return (
        <>
            <Col id="mynav" sm="auto">
                <Avatar />
                <div className="mytab">
                    {routers.map((router) => {
                        return (
                            <NavLink
                                className="tablinks text-center"
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
            <Col id="mynav-content" className="p-0" sm="auto">
                <Switch>
                    {routers.map((router) => {
                        return (
                            <Route key={router.path} path={router.path}>
                                <div className="tabcontent">
                                    {router.component}
                                </div>
                            </Route>
                        );
                    })}
                    <Route exact path="/">
                        <Redirect to="/dashboard" />
                    </Route>
                </Switch>
            </Col>
        </>
    );
}
