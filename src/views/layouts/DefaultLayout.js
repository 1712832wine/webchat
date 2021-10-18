import React from "react";
import Nav from "../components/Nav";
import Content from "../components/Content";
import { BrowserRouter as Router } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row vh-100">
          <Nav />
          <Content />
        </div>
      </div>
    </Router>
  );
}
