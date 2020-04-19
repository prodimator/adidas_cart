import { connect } from "react-redux";
import ProductDetails from './ProductDetails';

import {
    addToBag,
    updateBag,
} from '../../js/actions/index';

const mapStateToProps = state => {
    return {
        bag: state.bag
    };
};

export default connect(mapStateToProps, {
    addToBag,
    updateBag
})(ProductDetails);