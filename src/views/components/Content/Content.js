import React from "react";
import "./Content.scss";

import { Switch, Route } from "react-router-dom";
import routers from "../../../routersChatbot";
import { Carousel } from "react-bootstrap";

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
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://chat.zalo.me/assets/quick-message-onboard.3950179c175f636e91e3169b65d1b3e2.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://chat.zalo.me/assets/inapp-welcome-screen-04.ade93b965a968b16f2203e9d63b283a7.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://chat.zalo.me/assets/inapp-welcome-screen-01.469ad7daf26e0303dd0d54eb5262e795.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Route>
            </Switch>
        </div>
    );
}
