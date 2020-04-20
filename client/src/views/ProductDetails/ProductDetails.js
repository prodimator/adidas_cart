import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { Dropdown } from 'semantic-ui-react';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import axios from 'axios';

import './ProductDetails.scss';
import Button from '../../components/Button/Button';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            quantity: null,
            selected: null,
            availabilityOptions: [],
            error: false,
        }
    }
    componentDidMount() {
        const { id } = this.props;

        axios.get(`/api/products/${id}/availability?`)
            .then(res => {
                this.parseResponse(res.data);

            })

    }

    parseResponse = (data) => {
        let options = [];
        data.variation_list.map(variation => {
            if (variation.availability > 0) {
                const newOption = {
                    key: variation.size,
                    text: variation.size,
                    value: variation.size,
                    sku: variation.sku,
                    availability: variation.availability
                }
                options.push(newOption);
            }
            return options;
        });

        this.setState({ options });
    }

    handleSKUSelect = (event, data) => {
        let selected = data.options.find(option => option.value === data.value);

        let availabilityOptions = [];

        for (let i = 1; i <= selected.availability; i++) {
            const option = {
                key: i,
                text: i,
                value: i,
            }
            availabilityOptions.push(option);
        }
        this.setState({
            selected,
            availabilityOptions,
        });
    }

    handleQuantitySelect = (event, selected) => {
        this.setState({ quantity: selected.value, error: false, })
    }

    addToBag = () => {
        const { selected, quantity } = this.state;
        const { addToBag, itemName, itemPrice, imgSrc, toggleDisplay } = this.props;

        if (!selected || !quantity) {
            this.setState({ error: true })
        }
        else {
            const bagItem = {
                sku: selected.sku,
                quantity,
                itemName,
                itemPrice,
                imgSrc,
            }
            addToBag(bagItem);
            toggleDisplay();
        }

    }

    render() {
        const { imgSrc } = this.props;
        const { options, availabilityOptions, error } = this.state;

        return (
            <React.Fragment>
                {options.length > 0 &&
                    <Flexbox flexDirection="column"
                        justifyContent="center"
                    >
                        <img className="product-image" src={imgSrc} alt="item" />
                        <Flexbox justifyContent="space-between" className="my-sm" style={{ width: '100%' }}>
                            <Dropdown
                                className="select-size-dropdown"
                                placeholder='Select Size'
                                fluid
                                selection
                                options={options}
                                onChange={this.handleSKUSelect}

                            />
                            <Dropdown
                                className="select-size-dropdown"
                                placeholder='Select Quantity'
                                disabled={availabilityOptions.length === 0}
                                fluid
                                selection
                                options={availabilityOptions}
                                style={{ width: '150px', marginLeft: '20px' }}
                                onChange={this.handleQuantitySelect}
                            />
                        </Flexbox>
                        {error &&
                            <p className="m-sm font-size--xsm error">Make sure you select a size and quantity!</p>
                        }
                        <div onClick={this.addToBag}>
                            <Button buttonText="Add to bag" />
                        </div>
                    </Flexbox>
                }
                {options.length === 0 &&
                    <LoadingComponent />
                }
            </React.Fragment>
        )
    }
}