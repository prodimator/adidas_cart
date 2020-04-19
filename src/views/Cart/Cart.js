import React, { Component } from 'react';
import { ReactComponent as Menu } from '../../assets/svg/menu.svg';
import { motion } from "framer-motion";
import Flexbox from 'flexbox-react';
import CartItem from '../../components/CartItem/CartItem';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
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
            cartItems: []
        }
    }

    componentDidMount() {
        const { cookies } = this.props;
        cookies.set('name', 'hello', { path: '/' });
    }

    togglePanel = () => {
        const { isOpen } = this.state;

        this.setState({
            isOpen: !isOpen
        });
    }

    render() {
        const { isOpen, cartItems } = this.state;

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
                    <Flexbox className="cart-content m-md" flexDirection="column">
                        <h1 className="m-0">Cart</h1>
                        {cartItems.length === 0 &&
                            <div className="my-md">
                                <h3 className="my-sm">Your cart is empty</h3>
                                <p className="my-sm">Once you add something to your bag, it will appear here. Ready to get started?</p>
                                <div onClick={this.togglePanel}>
                                    <Button buttonText={'get started'} />
                                </div>
                            </div>
                        }
                        {
                            cartItems.map(item => (
                                <CartItem />
                            ))
                        }
                        <OrderSummary />
                    </Flexbox>
                </motion.div>
            </React.Fragment>
        )
    }
}

export default withCookies(Cart);
