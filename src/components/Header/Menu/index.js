import React from 'react';

import './Menu.css';

const Menu = (props) => {
    return (
        <div className="Header-Menu-Wrapper">
            <ul className={props.hideMenu ? "Header-Menu-List  mobile-hidden" : "Header-Menu-List"}>
                <li><a href="#">Women</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Shoes</a></li>
            </ul>
        </div>
    )
}

export default Menu;