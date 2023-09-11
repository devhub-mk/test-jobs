import React from "react";

function Submenu(props) {
    return (
        <a href={props.link} className='tabs'>
            <img src={props.image} alt="" className="svg-menu" />
        </a>
    );
};

export default Submenu;