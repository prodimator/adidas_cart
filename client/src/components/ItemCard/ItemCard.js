import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Button from '../../components/Button/Button';
import ProductDetails from '../../views/ProductDetails';
import Modal from '../Modal/Modal';
import { formatToCurrency } from '../../utils/formatter';
import './ItemCard.scss';

export default class ItemCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemSelected: false
        }
    }

    selectItem = () => {
        this.setState({
            itemSelected: true
        });
    }

    render() {
        const { itemSelected } = this.state;
        const { itemName, itemPrice, imgSrc, id } = this.props;

        return (
            <React.Fragment>
                <Flexbox className="item-card-container my-md"
                    justifyContent="center"
                    flexDirection="column"
                >
                    <img src={imgSrc} className="card-image" alt="item" />
                    <Flexbox className="item-info p-smd font-weight--bold font-size--sm"
                        justifyContent="space-between"
                    >
                        <p className="item-title m-0">{itemName}</p>
                        <p className="item-price m-0">{formatToCurrency.format(itemPrice)}</p>
                    </Flexbox>
                    <div onClick={this.selectItem}>
                        <Button buttonText="select item" />
                    </div>
                </Flexbox>
                {itemSelected &&
                    <Modal toggleDisplay={() => this.setState({ itemSelected: false })}>
                        <ProductDetails
                            id={id}
                            itemName={itemName}
                            imgSrc={imgSrc}
                            itemPrice={itemPrice}
                            toggleDisplay={() => this.setState({ itemSelected: false })}
                        />
                    </Modal>
                }
            </React.Fragment>
        )
    }
}