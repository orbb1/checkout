import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/';

//Components
import Header from './containers/Header/';
import ShopCart from './containers/Shop-Cart/';
import CheckoutForm from './containers/Checkout-Form/';

import './App.css';

const store = createStore(reducer);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App-Container" id="outer-container">
          <Header/>
          <div id="page-wrap" className="Content-Container">
            <div className="Content-Title">
                <p>Checkout</p>
            </div>
            <ShopCart/>
            <CheckoutForm/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;