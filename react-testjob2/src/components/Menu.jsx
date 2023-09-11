import React from "react";
import Submenu from './Submenu';

function Menu({ menus }) {
    console.log(menus)
    return (
        <ul>
            {menus.map(({ name, link, imgSrc }) => {
                return (
                    <li key={name}>
                        <Submenu link={link} image={imgSrc} />
                    </li>
                )
            })}
        </ul>
    );
};

export default Menu;