import React, { Component } from 'react';

//Components
import Header from './containers/header/';
import Bucket from './containers/bucket/';
import CheckoutForm from './containers/checkout-form/';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Bucket/>
        <CheckoutForm/>
      </div>
    );
  }
}

export default App;