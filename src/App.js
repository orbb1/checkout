import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/';
import Header from './containers/Header/';
import ShopCart from './containers/Shop-Cart/';
import CheckoutForm from './containers/Checkout-Form/';

import './App.css';

const store = createStore(reducer);

class App extends Component {

	render() {

		return (
			<Provider store={store}>
				<div className="App">
					<Header />
					<div className="Content container">
						<div className="Content-title-row">
							<h1>Checkout</h1>
						</div>
						<div className="row">
							<CheckoutForm />
							<ShopCart />
						</div>
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;