import React, { Component } from 'react';

//Components
import Header from './containers/Header/';
import ShopCart from './containers/Shop-Cart/';
import CheckoutForm from './containers/Checkout-Form/';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-Container">
        <Header/>
        <div className="Content-Container">
          <div className="Content-Title">
              <p>Checkout</p>
          </div>
          <ShopCart/>
          <CheckoutForm/>
        </div>
        
      </div>
    );
  }
}

export default App;