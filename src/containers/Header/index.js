import React, { Component } from 'react';

//Components
import Title from '../../components/Header/Title/';
import Menu from '../../components/Header/Menu/';
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
            <div className="Header-Wrapper">
                <div className="Header-Inner">
                    <Burger onHideMenu={this.onHideMenu}/>
                    <Title/>
                    <HeaderCart/>
                </div>
                <Menu hideMenu={this.state.hideMenu}/>
            </div>
        )
    }
}

export default Header;