import React from "react";
import "./Content.scss";

import { Switch, Route } from "react-router-dom";
import routers from "../../../routersChatbot";

export default function Content() {
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
                    <h1>This is carousel</h1>
                </Route>
            </Switch>
        </div>
    );
}
