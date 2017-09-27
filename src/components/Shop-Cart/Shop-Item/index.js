import React from 'react';
import {Glyphicon, Button} from 'react-bootstrap';

import Glasses from '../../../assets/img/pic-item.png';
import './Shop-Item.css';

const ShopItem = (props) => {
    
    let item = props.cartItem;
    let increase = props.increase;
    let decrease = props.decrease;
    
    return (
        <div className="ShopItem">
            <p className="ShopItem-name">{item.name}</p>
            <div className="ShopItem-image">
                <img src={Glasses} alt="Cart item"/>
            </div>
            <div className="ShopItem-description">
                <div className="ShopItem-counter">
                    <Button onClick={() => decrease(item)}>
                        <Glyphicon glyph='minus'/>
                    </Button>
                    <span className="ShopItem-amount">{item.amount}</span>
                    <Button onClick={() => increase(item)}>
                        <Glyphicon glyph='plus'/>
                    </Button>
                </div>
                <div className="ShopItem-price">
                    <span>Price: </span>
                    <span>{item.price}.00$</span>
                </div>
            </div>
        </div>
    )
}

export default ShopItem;
