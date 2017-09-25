import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {DELIVERY_INPUTS, PAYMENT_INPUTS, COUNT} from '../../config.js';

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
            <div className="CheckoutForm col-sm-6">
                <form onSubmit={this.onFormSubmit}>
                    <h3 className="CheckoutForm-title">Delivery address</h3>
                    <FormGroup>
                        {deliveryInputs.map((input, i) => {
                            return (
                                <div key={i} className="CheckoutForm-input">
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
                                            {countries.map((country, i) => {
                                                return <option key={i}>{country}</option>
                                            })}
                                        </FormControl>}
                                </div>
                            )
                        })
                        }
                    </FormGroup>
                    <h3 className="CheckoutForm-title">Payment</h3>
                    <FormGroup>
                        {paymentInputs.map((input, i) => {
                             return (
                                <div key={i} className="CheckoutForm-input">
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
                    <Button className="CheckoutForm-btn" type="submit">Buy</Button>
                </form>
            </div>
        )
    }
}

export default CheckoutForm;