import React from "react";
import "./style.scss";
import MyCarousel from "./MyCarousel";
import { Switch, Route } from "react-router-dom";
import routers from "../../../routersChatbot";

export default function index() {
    return (
        <div id="content" className="col d-none d-md-block">
            <Switch>
                {routers.map((router) => {
                    return (
                        <Route key={router.path} path={router.path}>
                            <div className="tabcontent">{router.component}</div>
                        </Route>
                    );
                })}
                <Route path="/">
                    <MyCarousel />
                </Route>
            </Switch>
        </div>
    );
}
