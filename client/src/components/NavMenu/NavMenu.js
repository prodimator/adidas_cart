import React, { Component } from 'react'
import Flexbox from 'flexbox-react';
import Cart from '../../views/Cart';

import './NavMenu.scss';

export default class NavMenu extends Component {
    render() {
        return (
            <Flexbox
                className="menu-container"
            >
                <Flexbox
                    className="menu-content px-lg"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <h1 className="m-0">Adidas Store</h1>
                    <Cart />
                </Flexbox>
            </Flexbox>
        )
    }
}
