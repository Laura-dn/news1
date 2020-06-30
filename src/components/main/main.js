import React from "react";

import "./main.css";

function Main() {
    const imgSrc = "https://zdnet3.cbsistatic.com/hub/i/r/2020/06/30/f0b4381f-f098-4555-9a3c-bddcc6049086/thumbnail/770x578/ffcaf7a8e06459610b64ceeda7b114d3/screenshot-2020-06-30-at-09-30-02.png";
    const body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                  officia deserunt mollit anim id est laborum...`;

    return(
        <main className="col-6">
            <article className="card mb-3">
                <h3 className="card-header">Какая-то очень важная статья/новость</h3>
                <div className="card-body">
                    <img className="float-left mr-3" src={ imgSrc } alt="Card image" />
                    { body }
                </div>
                <a href="#" className="text-right m-2"><span className="badge badge-success">READ MORE</span></a>
            </article>
            <article className="card mb-3">
                <h3 className="card-header">Какая-то очень важная статья/новость</h3>
                <div className="card-body">
                    <img className="float-left mr-3" src={ imgSrc } alt="Card image" />
                    { body }
                </div>
                <a href="#" className="text-right m-2"><span className="badge badge-success">READ MORE</span></a>
            </article>
            <article className="card mb-3">
                <h3 className="card-header">Какая-то очень важная статья/новость</h3>
                <div className="card-body">
                    <img className="float-left mr-3" src={ imgSrc } alt="Card image" />
                    { body }
                </div>
                <a href="#" className="text-right m-2"><span className="badge badge-success">READ MORE</span></a>
            </article>
        </main>
    );
}

export default Main;
