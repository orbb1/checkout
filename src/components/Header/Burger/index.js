import React from 'react';

import MenuIcon from '../../../assets/img/icon-hamburger.svg';
import './Burger.css';

const Burger = (props) => {

    return (
            <div className="Hamburger-Menu">
                <img onClick={props.onHideMenu} src={MenuIcon} alt="Menu"/>
                <span>Menu</span>
            </div>
    )
}

export default Burger;