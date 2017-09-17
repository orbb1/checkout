import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from '../../components/Header/Title/';
import Nav from '../../components/Header/Nav/';
import HeaderCart from '../../components/Header/Header-Cart/';
import Burger from '../../components/Header/Burger/';

import './Header.css';

class Header extends Component {
    constructor (props) {
        super(props)
        
        this.state = { hideMenu: true };
        this.onHideMenu = this.onHideMenu.bind(this);
    }

    onHideMenu() {
        this.setState({hideMenu: !this.state.hideMenu});
    }

    render() {

        return (
            <div className="Header">
                <Burger onHideMenu={this.onHideMenu}/>
                <Title/>
                <Nav hideMenu={this.state.hideMenu}/>
                <HeaderCart cartItems={this.props.cartItems}/>
            </div>
        )
    }
}

export default connect(
    state => ({
        cartItems: state
    }),
    null
)(Header);