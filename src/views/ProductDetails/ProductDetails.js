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
        axios.get(`https://www.adidas.com/api/products/EG4958/availability?callback=foo`)
            .then(res => {
                console.log(res);
            })
        this.parseResponse();

    }

    parseResponse = () => {
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

        if (!selected || !quantity) {
            this.setState({ error: true })
        }
        else {
            console.log(`adding ${this.state.selected.sku} to bad with a quantity of ${this.state.quantity}`)
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
                        <img className="product-image" src={imgSrc} />
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

const data = {
    id: "EG4958",
    availability_status: "IN_STOCK",
    variation_list: [
        {
            sku: "EG4958_520",
            availability: 0,
            availability_status: "NOT_AVAILABLE",
            size: "M 3.5 / W 4.5"
        },
        {
            sku: "EG4958_530",
            availability: 0,
            availability_status: "NOT_AVAILABLE",
            size: "M 4 / W 5"
        },
        {
            sku: "EG4958_540",
            availability: 0,
            availability_status: "NOT_AVAILABLE",
            size: "M 4.5 / W 5.5"
        },
        {
            sku: "EG4958_550",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 5 / W 6"
        },
        {
            sku: "EG4958_560",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 5.5 / W 6.5"
        },
        {
            sku: "EG4958_570",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 6 / W 7"
        },
        {
            sku: "EG4958_580",
            availability: 0,
            availability_status: "NOT_AVAILABLE",
            size: "M 6.5 / W 7.5"
        },
        {
            sku: "EG4958_590",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 7 / W 8"
        },
        {
            sku: "EG4958_600",
            availability: 13,
            availability_status: "IN_STOCK",
            size: "M 7.5 / W 8.5"
        },
        {
            sku: "EG4958_610",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 8 / W 9"
        },
        {
            sku: "EG4958_620",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 8.5 / W 9.5"
        },
        {
            sku: "EG4958_630",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 9 / W 10"
        },
        {
            sku: "EG4958_640",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 9.5 / W 10.5"
        },
        {
            sku: "EG4958_650",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 10 / W 11"
        },
        {
            sku: "EG4958_660",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 10.5 / W 11.5"
        },
        {
            sku: "EG4958_670",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 11 / W 12"
        },
        {
            sku: "EG4958_680",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 11.5 / W 12.5"
        },
        {
            sku: "EG4958_690",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 12 / W 13"
        },
        {
            sku: "EG4958_700",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 12.5 / W 13.5"
        },
        {
            sku: "EG4958_710",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 13 / W 14"
        },
        {
            sku: "EG4958_720",
            availability: 0,
            availability_status: "NOT_AVAILABLE",
            size: "M 13.5 / W 14.5"
        },
        {
            sku: "EG4958_730",
            availability: 15,
            availability_status: "IN_STOCK",
            size: "M 14 / W 15"
        },
        {
            sku: "EG4958_740",
            availability: 0,
            availability_status: "NOT_AVAILABLE",
            size: "M 14.5 / W 15.5"
        },
        {
            sku: "EG4958_750",
            availability: 0,
            availability_status: "NOT_AVAILABLE",
            size: "M 15 / W 16"
        },
        {
            sku: "EG4958_760",
            availability: 0,
            availability_status: "NOT_AVAILABLE",
            size: "M 16 / W 17"
        },
        {
            sku: "EG4958_780",
            availability: 0,
            availability_status: "NOT_AVAILABLE",
            size: "M 17 / W 18"
        },
        {
            sku: "EG4958_790",
            availability: 0,
            availability_status: "NOT_AVAILABLE",
            size: "M 18 / W 19"
        },
        {
            sku: "EG4958_800",
            availability: 0,
            availability_status: "NOT_AVAILABLE",
            size: "M 19 / W 20"
        }
    ]
}
