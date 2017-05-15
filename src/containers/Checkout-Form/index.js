import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { DELIVERY_INPUTS, PAYMENT_INPUTS, COUNT } from '../../config.js';

import './Checkout-Form.css';

class CheckoutForm extends Component {

    getDeliveryInputs() {
        return DELIVERY_INPUTS;
    }

    getPaymentInputs() {
        return PAYMENT_INPUTS;
    }

    onFormSubmit() {
        alert("Succes!");
    }

    render() {

        const deliveryInputs = this.getDeliveryInputs();
        const paymentInputs = this.getPaymentInputs();
        const countries = COUNT;

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
                                            { countries.map((country, i) => {
                                                return <option key={i}>{country}</option>
                                            })}
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
                                    <ControlLabel>{paymentInputs[i].name}</ControlLabel>
                                    {paymentInputs[i].required
                                        ? <span>  *</span>
                                        : null}
                                    <FormControl
                                        inputRef={ref => { this.input = ref; }}
                                        componentClass="input"
                                        required={paymentInputs[i].required}
                                        type={paymentInputs[i].type} />
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