import React from "react";
import "./Content.scss";

import { Carousel, Image, Col } from "react-bootstrap";
import { connect } from "react-redux";
import MessageBox from "./MessageBox/MessageBox";
// import { getLocalStorage } from "../../../helper/index"

function Content({ chatbot_id, isOpenChatbot }) {
    // useEffect(() => {
    //     // chatbot_id = localStorage.getItem('chatbot_id');
    //     // isOpenChatbot = localStorage.getItem('isOpenChatbot');
    //     // console.log(chatbot_id, isOpenChatbot)
    // }, [])
    const hideClassName = "d-none d-md-block";
    return (
        <Col chatbot_id="content" className={(isOpenChatbot) ? "p-0" : "p-0 " + hideClassName}>
            {chatbot_id ? (
                <MessageBox chatbot_id={chatbot_id} />
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
        </Col>
    );
}

function mapStateToProps(state) {
    return {
        chatbot_id: state.chatbots.id,
        isOpenChatbot: state.chatbots.isOpenChatbot,
    };
}
export default connect(mapStateToProps)(Content);
