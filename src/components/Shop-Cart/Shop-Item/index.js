import React from 'react';

import Glasses from '../../../assets/img/pic-item.png';
import IncreaseIcon from '../../../assets/img/icon-plus.svg';
import DecreaseIcon from '../../../assets/img/icon-minus.svg';
import './Shop-Item.css';

const ShopItem = (props) => {
    
    let item = props.cartItem;
    let increase = props.increase;
    let decrease = props.decrease;
    
    return (
        <div className="Item-container">
            <div className="ItemImage-Wrapper">
                <img src={Glasses} className="ItemImage" alt="Cart item"/>
            </div>
            <div className="ItemDescription-Wrapper">
                <p className="ItemName">{item.name}</p>
                <div className="ItemCount">
                    <img onClick={() => decrease(item)} src={DecreaseIcon} alt="Remove item"/>
                    <span>{item.amount}</span>
                    <img onClick={() => increase(item)} src={IncreaseIcon} alt="Add item"/>                    
                </div>
                <div className="ItemPrice">
                    <span>Price</span>
                    <span>{item.price}.00$</span>
                </div>
            </div>
        </div>
    )
}

export default ShopItem;
