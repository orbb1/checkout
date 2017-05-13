import React, { Component } from 'react';

//Components
import Title from '../../components/Header/Title/';
import Menu from '../../components/Header/menu/';
import HeaderCart from '../../components/Header/Header-Cart/';

import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="Header-Wrapper">
                <div>
                    <Title/>
                    <HeaderCart/>
                </div>
                <Menu/>
                
            </div>
        )
    }
}

export default Header;