import React, { Component } from 'react';
import { ReactComponent as Menu } from '../../assets/svg/menu.svg';
import { motion } from "framer-motion";
import Flexbox from 'flexbox-react';
import CartItem from '../../components/CartItem';
import OrderSummary from '../../components/OrderSummary';
import Button from '../../components/Button/Button';
import { withCookies } from 'react-cookie';

import './Cart.scss';


const panel = {
    open: { right: 0 },
    closed: { right: -400 },
};

const blackBox = {
    open: { scale: 1 },
    closed: { scale: 0 }
}

const style = {
    open: { filter: 'invert(100%)' },
    closed: { filter: 'invert(0%)' }
}

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            basketId: null,
        }
    }

    componentDidMount() {
        const { cookies } = this.props;

        // check to see if there is an existing bag to be used
        if (!cookies.get('bag')) {
            // axios.post(`https://www.adidas.com/api/checkout/baskets`, {
            //     withCredentials: true,
            //     headers: {
            //         'Content-Type': 'application/json',
            //     }
            // })
            //     .then(res => {
            //         console.log(res);
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     });
        }
    }

    togglePanel = () => {
        const { isOpen } = this.state;

        this.setState({
            isOpen: !isOpen
        });
    }

    render() {
        const { isOpen } = this.state;
        const { bag, showOrderOverview, toggleOrderOverview } = this.props;

        return (
            <React.Fragment>
                <motion.div
                    className="black-box"
                    animate={isOpen ? "open" : "closed"}
                    variants={blackBox}
                >
                </motion.div>
                <motion.div
                    animate={isOpen ? "open" : "closed"}
                    variants={style}
                    transition={{
                        delay: .2,
                    }}
                >
                    <Menu className="menu-icon" onClick={this.togglePanel} />
                </motion.div>
                <motion.div
                    className="cart-container shadow"
                    animate={isOpen ? "open" : "closed"}
                    transition={{ duration: .5 }}
                    variants={panel}
                >
                    {!showOrderOverview &&
                        <Flexbox className="cart-content m-md" flexDirection="column">
                            <h1 className="m-0">Bag</h1>
                            {bag.length === 0 &&
                                <div className="my-md">
                                    <h3 className="my-sm">Your bag is empty</h3>
                                    <p className="my-sm">Once you add something to your bag, it will appear here. Ready to get started?</p>
                                    <div onClick={this.togglePanel}>
                                        <Button buttonText={'get started'} />
                                    </div>
                                </div>
                            }
                            {
                                bag.map(item => (
                                    <div key={item.sku}>
                                        <CartItem sku={item.sku} />
                                    </div>
                                ))
                            }
                            {bag.length > 0 &&
                                <div onClick={() => toggleOrderOverview({ showOrderOverview: true })}>
                                    <Button buttonText={'show order overview'} />
                                </div>
                            }
                            {/* <OrderSummary /> */}
                        </Flexbox>
                    }
                    {showOrderOverview &&
                        <Flexbox className="cart-content m-md" flexDirection="column">
                            <OrderSummary />
                        </Flexbox>
                    }
                </motion.div>
            </React.Fragment>
        )
    }
}

export default withCookies(Cart);
