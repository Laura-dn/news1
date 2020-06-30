import React from "react";

import "./aside.css";

function Aside() {
    const asideMenu = [
        "Главные новости",
        "Сохраненные запросы",
        "Украина",
        "В мире",
        "Местные новости",
        "Бизнес"
    ];

    return(
        <aside className="list-group col-2">
            {
                asideMenu.map((el, index) => {
                    return(<a href="#" 
                              className="list-group-item list-group-item-action"
                              key={ index }>{el}</a>);
                })
            }
        </aside>
    );
}

export default Aside;
