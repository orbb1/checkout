import React, { Component } from 'react';

//Components
import Title from '../../components/header/title/';
import Menu from '../../components/header/menu/';
import HeaderBucket from '../../components/header/header-bucket/';

class Header extends Component {

    render() {
        return (
            <div>
                <Title/>
                <Menu/>
                <HeaderBucket/>
            </div>
        )
    }
}

export default Header;