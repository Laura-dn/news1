import React from "react";

import "./footer.css";

function Footer() {
    return(
        <footer className="d-flex justify-content-around align-items-start bg-secondary p-2">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">Скачать приложение для Android</a>
                <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">Отправить отзыв</a>
                <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">Реклама на MyNews</a>
                <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">Справка</a>
            </div>
            
            <div className="text-center">
                <a href="mailto:a.avrakhova@mail.com">&#9400; 2020 Аврахова Л.В.</a>
                <div className="mt-3">
                    <a href="#" className="p-1"><i className="fab fa-facebook-square"></i></a>
                    <a href="#" className="p-1"><i className="fab fa-vk"></i></a>
                    <a href="#" className="p-1"><i className="fab fa-instagram-square"></i></a>
                    <a href="#" className="p-1"><i className="fab fa-telegram-plane"></i></a>
                    <a href="#" className="p-1"><i className="fab fa-twitter-square"></i></a>
                </div>
            </div>

            <form className="form-inline my-2 my-lg-0">
                Подписка на рассылку: &#8195;
                <input className="form-control mr-sm-2" type="text" placeholder="E-mail" />
                <button className="btn btn-light my-2 my-sm-0" type="submit">Подписаться</button>
            </form>
        </footer>
    );
}

export default Footer;
