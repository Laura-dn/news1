import React from "react";

import "./aside-right.css";

function AsideRight() {
    return(
        <section className="aside-right col-3 d-flex justify-content-start align-items-center p-3 flex-column">
            <div id="openweathermap-widget-22"></div>
            <div id="minfin-informer-m1Fn-currency" className="m-5">
                <iframe width="250" height="120" frameBorder="0" src="https://informer.minfin.com.ua/gen/course/?color=white" vspace="0" scrolling="no" hspace="0" allowtransparency="true"></iframe>
            </div>
        </section>
    );
}

export default AsideRight;
