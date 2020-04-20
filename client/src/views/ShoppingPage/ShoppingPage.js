import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import ItemCard from '../../components/ItemCard/ItemCard';
import response from '../../utils/mockAPIData.json';

import './ShoppingPage.scss';

export default class ShoppingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingItems: response.data
        }
    }

    render() {
        const { shoppingItems } = this.state;

        console.log("shopping page");

        return (
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
        )
    }
}


