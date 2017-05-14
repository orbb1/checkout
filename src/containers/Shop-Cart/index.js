import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShopItem from '../../components/Shop-Cart/Shop-Item/';
import './Shop-Cart.css';

class ShopCart extends Component {
    constructor(props) {
        super(props)
        
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase(item) {
        this.props.onIncrease(item);
    }

    decrease(item) {
        this.props.onDecrease(item);
    }
    
    



    render() {
        let shippingPrice = 20;
        let subtotal = this.props.cartItems.reduce((a, b) => {
            return a + (b.price*b.amount);
        }, 0);
        let total = shippingPrice + subtotal;
            
        return (
            <div className="ShopCart-Container">
                <div>
                    <p className="Container-Header">your order</p>                    
                </div>
                <div>{this.props.cartItems.map((cartItem, i) => {
                        return <ShopItem key={i} 
                            cartItem={cartItem} 
                            increase={this.increase} 
                            decrease={this.decrease}/>
                        })
                    }
                </div>
                <div className="ShopCart-Summary">
                    <p className="Container-Header">Order Summary</p>
                    <table className="Summary-Table">
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>{subtotal}$</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>{shippingPrice}$</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td>{total}$</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        cartItems: state
    }),
    dispatch => ({
        onIncrease: (item) => dispatch({ type: 'INCREASE', payload: item }),
        onDecrease: (item) => dispatch({ type: 'DECREASE', payload: item })
    })
)(ShopCart);