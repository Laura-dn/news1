import React, { Component } from "react";
import Header from "../header";
import Aside from "../aside";
import Main from "../main";
import AsideRight from "../aside-right";
import Footer from "../footer";

import "./app.css";


export default class App extends Component {
    state = {
        
    };

    render() {
        return (
            <>
                <Header />
                <section className="d-flex justify-content-around p-2">
                    <Aside />
                    <Main />
                    <AsideRight />
                </section>
                <Footer />
            </>
        );
    }
}
