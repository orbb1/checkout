import React from 'react';

import iconBag from '../../../assets/img/icon-bag.svg';
import './Header-Cart.css';

const HeaderCart = () => {
    return (
        <div className="Header-Cart-Wrapper">
            <img alt="Bag" className="Cart-Icon" src={iconBag}/>
            <span>2</span>
        </div>
    )
}

export default HeaderCart;