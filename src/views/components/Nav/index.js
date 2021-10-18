import React from "react";
import { Switch, NavLink, Route, Redirect } from "react-router-dom";
import Avatar from "./Avatar";
import routers from "../../../routers";
import "./style.scss";

export default function index() {
    return (
        <>
            <div id="mynav" className="col-auto">
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
            </div>

            <div id="mynav-content" className="col-md-auto col p-0">
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
            </div>
        </>
    );
}
