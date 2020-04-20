import React from 'react';
import Flexbox from 'flexbox-react';
import Button from '../Button/Button';
import { formatToCurrency } from '../../utils/formatter';


import './OrderSummary.scss';

export default function OrderSummary(props) {

    const { toggleOrderOverview } = props;

    const getBagTotal = () => {
        const { bag } = props;

        let totalPrice = 0;
        let totalItems = 0;

        bag.map(item => {
            totalPrice += item.itemPrice * item.quantity;
            totalItems += item.quantity;
        });

        return {
            totalItems,
            totalPrice
        }
    }

    const { totalItems, totalPrice } = getBagTotal();

    return (
        <Flexbox
            className="order-summary-container"
            flexDirection="column"
        >
            <Flexbox className="my-sm" justifyContent="space-between" alignItems="center">
                <h1 className="m-0">Order Summary</h1>
                <span onClick={() => toggleOrderOverview({ showOrderOverview: false })} className="back font-size--xsm">Back to Bag</span>
            </Flexbox>
            <Flexbox justifyContent="space-between">
                <p className="m-sm">{totalItems} ITEM{totalItems > 1 ? 'S' : ''}</p>
                <p className="m-sm">{formatToCurrency.format(totalPrice)}</p>
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
                <p className="m-sm">{formatToCurrency.format(totalPrice)}</p>
            </Flexbox>
            <div className="my-sm">
                <Button buttonText="Checkout" />
            </div>
        </Flexbox>
    )
}

