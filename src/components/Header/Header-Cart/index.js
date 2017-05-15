import React from 'react';

import iconBag from '../../../assets/img/icon-bag.svg';
import './Header-Cart.css';

const HeaderCart = (props) => {

    let itemCount = props.cartItems.reduce((a, b) => {
            return a + (b.amount);
        }, 0);

    return (
        <div className="Header-Cart-Wrapper">
            <img alt="Bag" className="Cart-Icon" src={iconBag}/>
            <span>{itemCount}</span>
        </div>
    )
}

export default HeaderCart;