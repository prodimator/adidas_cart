import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Button from '../Button/Button';

import './OrderSummary.scss';

export default class OrderSummary extends Component {
    render() {
        return (
            <Flexbox
                className="order-summary-container"
                flexDirection="column"
            >
                <h1 className="m-0">Order Summary</h1>
                <Flexbox justifyContent="space-between">
                    <p className="m-sm">1 ITEM</p>
                    <p className="m-sm">$55.00</p>
                </Flexbox>
                <Flexbox justifyContent="space-between">
                    <p className="m-sm">DELIVERY</p>
                    <p className="m-sm">FREE</p>
                </Flexbox>
                <Flexbox justifyContent="space-between">
                    <p className="m-sm">SALES TAX</p>
                    <p className="m-sm">-</p>
                </Flexbox>
                <Flexbox justifyContent="space-between">
                    <p className="m-sm">ORDER TOTAL</p>
                    <p className="m-sm">$55.00</p>
                </Flexbox>
                <Button buttonText="Checkout" />
            </Flexbox>
        )
    }
}
