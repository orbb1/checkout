import React from 'react';
import {Glyphicon} from 'react-bootstrap';

import './Burger.css';

const Burger = (props) => {

    return (
            <div className="HamburgerMenu">
                <Glyphicon glyph='menu-hamburger' onClick={props.onHideMenu}/>
            </div>
    )
}

export default Burger;