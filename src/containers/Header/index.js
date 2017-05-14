import React, { Component } from 'react';

//Components
import Title from '../../components/Header/Title/';
import Menu from '../../components/Header/Menu/';
import HeaderCart from '../../components/Header/Header-Cart/';

import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="Header-Wrapper">
                <div className="Header-Inner">
                    <Title/>
                    <HeaderCart/>
                </div>
                <Menu/>
                
            </div>
        )
    }
}

export default Header;