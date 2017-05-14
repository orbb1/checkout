import React, { Component } from 'react';

import ShopItem from '../../components/Shop-Cart/Shop-Item/';
import './Shop-Cart.css';

class ShopCart extends Component {

    render() {
        return (
            <div className="ShopCart-Container">
                <div>
                    <p className="ShopCart-Header">your order</p>                    
                </div>
                <div>
                    <ShopItem/>
                    <ShopItem/>
                </div>
                <div className="ShopCart-Summary">
                    <p className="ShopCart-Header">Order Summary</p>
                    <table className="Summary-Table">
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>300$</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>20$</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td>320$</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

export default ShopCart;