import React from 'react';
import {Glyphicon} from 'react-bootstrap';

import './Header-Cart.css';

const HeaderCart = (props) => {

    let itemCount = props.cartItems.reduce((a, b) => {
            return a + (b.amount);
        }, 0);

    return (
        <div className="HeaderCart">
            <Glyphicon glyph='shopping-cart'/>
            <span>{itemCount}</span>
        </div>
    )
}

export default HeaderCart;