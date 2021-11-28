import React from "react";
import "./Content.scss";

import { Carousel, Image } from "react-bootstrap";
import { connect } from "react-redux";
import MessageBox from "./MessageBox/MessageBox";

function Content({ id }) {
    return (
        <div id="content" className="col d-none d-md-block">
            {id ? (
                <MessageBox />
            ) : (
                <Carousel variant="dark">
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src="https://chat.zalo.me/assets/quick-message-onboard.3950179c175f636e91e3169b65d1b3e2.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src="https://chat.zalo.me/assets/inapp-welcome-screen-04.ade93b965a968b16f2203e9d63b283a7.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src="https://chat.zalo.me/assets/inapp-welcome-screen-01.469ad7daf26e0303dd0d54eb5262e795.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            )}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        id: state.chatbots.id,
    };
}
export default connect(mapStateToProps)(Content);
