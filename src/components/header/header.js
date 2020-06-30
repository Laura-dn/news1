import React from "react";

import "./header.css";
import Img from "./mynews-logo.png";

function Header() {
    return(
        <header className="d-flex justify-content-around align-items-center bg-secondary p-2">
                    <a href="#">
                        <img src={ Img } alt="mynew-logo"  className="logo" />
                    </a>
                    <input className="form-control mr-sm-2" type="text" placeholder="&#128269; Поиск тем, мест и источников" />
                    <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
        </header>
    );
}

export default Header;