import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { deliveryInputList, paymentInputList } from '../../config.js';

import './Checkout-Form.css';

class CheckoutForm extends Component {

    getDeliveryInputs() {
        return deliveryInputList;
    }

    getPaymentInputs() {
        return paymentInputList;
    }

    onFormSubmit(e) {
        e.preventDefault();
        alert("Succes");
    }

    render() {

        const deliveryInputs = this.getDeliveryInputs();
        const paymentInputs = this.getPaymentInputs();

        return (
            <div className="Form-Container">
                <form onSubmit={this.onFormSubmit}>
                    <p className="Container-Header">Delivery address</p>
                    <FormGroup bsSize="lg">
                        {deliveryInputs.map((input, i) => {
                            return (
                                <div key={i} className="Checkout-Input">
                                    <ControlLabel>{deliveryInputs[i].name}</ControlLabel>
                                    {deliveryInputs[i].required
                                        ? <span>  *</span>
                                        : null}
                                    {deliveryInputs[i].componentClass === 'input'
                                        ? <FormControl
                                            componentClass="input"
                                            required={deliveryInputs[i].required}
                                            type={deliveryInputs[i].type} />
                                        : <FormControl
                                            required={deliveryInputs[i].required}
                                            componentClass="select">
                                            <option value="select">select 1</option>
                                            <option value="other">select 2</option>
                                        </FormControl>}
                                </div>
                            )
                        })
                        }
                    </FormGroup>
                    <p className="Container-Header">Payment</p>
                    <FormGroup bsSize="lg">
                        {paymentInputs.map((input, i) => {
                            return (
                                <div key={i} className="Checkout-Input">
                                    <ControlLabel>{paymentInputs[i]}</ControlLabel>
                                    <FormControl componentClass="input" type="text" />
                                </div>
                            )
                        })
                        }
                    </FormGroup>
                    <Button className="Checkout-Button" bsSize="large" type="submit">Buy</Button>
                </form>
            </div>
        )
    }
}

export default CheckoutForm;