import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import axios from 'axios';
import ItemCard from '../../components/ItemCard/ItemCard';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';

import './ShoppingPage.scss';

const products = ['EG4958', 'D96635', 'FV3788', 'ED9296', 'FM1435', 'GK0658', 'FT8429', 'CM5615']

export default class ShoppingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingItems: []
        }
    }

    componentDidMount() {
        let data = [];
        products.map(product => {
            axios.get(`/api/products/${product}`)
                .then(res => {
                    data.push(res.data);
                    this.setState({ shoppingItems: data })
                });
            return data
        })
    }

    render() {
        const { shoppingItems } = this.state;

        return (
            <React.Fragment>
                {shoppingItems.length !== products.length &&
                    <LoadingComponent />
                }
                {shoppingItems.length === products.length &&
                    <Flexbox className="shopping-page-container p-lg my-lg"
                        flexDirection="column"
                    >
                        <Flexbox className="store-items"
                            justifyContent="flex-start"
                            flexWrap="wrap"
                        >
                            {shoppingItems.map((item) => {
                                return (
                                    <div className="card-container" key={item.id}>
                                        <ItemCard
                                            id={item.id}
                                            itemName={item.name}
                                            itemPrice={item.pricing_information.currentPrice}
                                            imgSrc={item.view_list[0].image_url}
                                        />
                                    </div>
                                )
                            })}
                        </Flexbox>
                    </Flexbox>
                }
            </React.Fragment>
        )
    }
}


