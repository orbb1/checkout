import React from 'react';

import Glasses from '../../../assets/img/pic-item.png';
import IncreaseIcon from '../../../assets/img/icon-plus.svg';
import DecreaseIcon from '../../../assets/img/icon-minus.svg';
import './Shop-Item.css';

const ShopItem = () => {
    return (
        <div className="Item-container">
            <div className="ItemImage-Wrapper">
                <img src={Glasses} className="ItemImage" alt="Cart item"/>
            </div>
            <div className="ItemDescription-Wrapper">
                <p className="ItemName">Acme product name</p>
                <div className="ItemCount">
                    <img src={DecreaseIcon} alt="Remove item"/>
                    <span>1</span>
                    <img src={IncreaseIcon} alt="Add item"/>                    
                </div>
                <div className="ItemPrice">
                    <span>Price</span>
                    <span>300.00$</span>
                </div>
            </div>
        </div>
    )
}

export default ShopItem;
