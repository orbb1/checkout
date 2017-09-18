import React from 'react';

import './Nav.css';

const Nav = (props) => {
    return (
        <div className={`Nav ${props.hideMenu ? `u-hidden` : ``}`} onClick={props.onHideMenu}>
            <ul className={"Nav-list"}>
                <li className="Nav-list-item"><a href="#">Women</a></li>
                <li className="Nav-list-item"><a href="##">Men</a></li>
                <li className="Nav-list-item"><a href="###">Accessories</a></li>
                <li className="Nav-list-item"><a href="####">Shoes</a></li>
            </ul>
        </div>
    )
}

export default Nav;