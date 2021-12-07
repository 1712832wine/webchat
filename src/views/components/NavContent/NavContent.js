import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import routers from "../../../routers";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import { changeRouteAction } from "../../../actions/index"

import "./NavContent.scss"

function NavContent({ changeRouteAction, isOpenChatbot }) {
    const location = useLocation();
    const hideClassName = "d-none d-md-block";
    useEffect(() => {
        changeRouteAction({ isOpenChatbot }); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    return (
        <Col id="mynav-content" className={(isOpenChatbot) ? "p-0 " + hideClassName : "p-0"} md="auto" xs>
            <Switch>
                {routers.map((router) => {
                    return (
                        <Route key={router.path} path={router.path}>
                            <div className="nav-item__content">
                                {router.component}
                            </div>
                        </Route>
                    );
                })}
                <Route exact path="/">
                    <Redirect to="/chatbots" />
                </Route>
            </Switch>
        </Col>
    )
}
function mapStateToProps(state) {
    return {
        isOpenChatbot: state.chatbots.isOpenChatbot
    };
}
export default connect(mapStateToProps, { changeRouteAction })(NavContent);
