import React from "react";
import Nav from "../components/Nav/Nav";
import NavContent from "../components/NavContent/NavContent";
import Content from "../components/Content/Content";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

export default function DefaultLayout() {
    return (
        <Router>
            <Container fluid>
                <Row className="vh-100">
                    <Nav />
                    <NavContent />
                    <Content />
                </Row>
            </Container>
        </Router>
    );
}
