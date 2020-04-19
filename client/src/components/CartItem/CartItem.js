import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { formatToCurrency } from '../../utils/formatter';

import './CartItem.scss';

export default class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bagItem: this.props.bag.find(item => item.sku === this.props.sku)
        }
    }

    remove = () => {
        const { bagItem } = this.state;

        this.props.removeFromBag(bagItem);
    }

    addQuantity = () => {
        const { bagItem } = this.state;

        this.setState({
            bagItem: {
                ...bagItem,
                quantity: this.state.bagItem.quantity + 1
            }
        }, () => {
            this.props.updateQuantity(bagItem, bagItem.quantity);
        });
    }

    reduceQuantity = () => {
        const { bagItem } = this.state;

        if (bagItem.quantity === 1) {
            this.props.removeFromBag(bagItem);
        }

        if (bagItem.quantity > 0) {
            this.setState({
                bagItem: {
                    ...bagItem,
                    quantity: this.state.bagItem.quantity - 1
                }
            }, () => {
                this.props.updateQuantity(bagItem, bagItem.quantity);
            });
        }
    }

    render() {
        const { bagItem } = this.state;

        return (
            <Flexbox className="cart-item-container py-md">
                <img src={bagItem.imgSrc} className="item-image-small" alt="item" />
                <Flexbox
                    className="item-info"
                    flexDirection="column"
                    justifyContent="center"
                    style={{ width: '100%' }}
                >
                    <span className="font-size--md">{bagItem.itemName}</span>
                    <Flexbox
                        className="py-sm"
                        justifyContent="space-between"
                        alignItems="center"
                        style={{ width: '70%' }}
                    >
                        <span className="item-price font-size--lg font-weight--bold">{formatToCurrency.format(bagItem.itemPrice * bagItem.quantity)}</span>
                        <div>
                            <span className="increment" onClick={this.reduceQuantity}>-</span>
                            &nbsp;{bagItem.quantity}&nbsp;
                        <span className="increment" onClick={this.addQuantity}>+</span>
                        </div>
                        <span className="remove font-size--xsm" onClick={this.remove}>REMOVE</span>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        )
    }
}

