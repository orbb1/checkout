import React from 'react';

import './Burger.css';

const Burger = (props) => {

    return (
            <div className="HamburgerMenu">
                <div className={`HamburgerMenu-icon`}  onClick={props.onHideMenu}>
                    <div className={`bar ${props.hideMenu ? `` : `active`}`}></div>
                </div>
            </div>
    )
}

export default Burger;