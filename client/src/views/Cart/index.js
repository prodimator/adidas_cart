import { connect } from "react-redux";
import Cart from './Cart';

import {
    updateBag
} from '../../js/actions/index';

const mapStateToProps = state => {
    return {
        bag: state.bag
    };
};

export default connect(mapStateToProps, {
    updateBag
})(Cart);