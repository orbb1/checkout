import React from 'react';

import './Menu.css';
import MenuIcon from '../../../assets/img/icon-hamburger.svg';

const Menu = () => {
    return (
        <div className="Header-Menu-Wrapper">
            <ul className="Header-Menu-List">
                <li><a href="#">Women</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Shoes</a></li>
            </ul>
            <div className="Hamburger-Menu">
                        <img src={MenuIcon} alt="Menu"/>
                        <span>Menu</span>
                    </div>
        </div>
    )
}

export default Menu;