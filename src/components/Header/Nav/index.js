import React from 'react';

import './Nav.css';

const Nav = (props) => {
    return (
        <div className="Nav">
            <ul className={props.hideMenu ? "Nav-list  mobile-hidden" : "Nav-list"}>
                <li><a href="#">Women</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Shoes</a></li>
            </ul>
        </div>
    )
}

export default Nav;