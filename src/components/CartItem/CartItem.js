import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import './CartItem.scss';

export default class CartItem extends Component {
    render() {
        return (
            <Flexbox className="cart-item-container py-md">
                <div className="item-image" />
                <Flexbox
                    className="item-info"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <span className="font-size--md font-weight--bold">Yeezy Slide Adults | Earth Brown</span>
                    <Flexbox
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <span className="item-price font-size--lg font-weight--bold">$55.00</span>
                        <div>-&nbsp;01&nbsp;+</div>
                        <span className="font-size--sm">REMOVE</span>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        )
    }
}
