import { connect } from "react-redux";
import CartItem from './CartItem';

import {
    updateBag,
    removeFromBag,
    updateQuantity
} from '../../js/actions/index';

const mapStateToProps = state => {
    return {
        bag: state.bag
    };
};

export default connect(mapStateToProps, {
    updateBag,
    removeFromBag, updateQuantity
})(CartItem);