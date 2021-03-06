import { connect } from "react-redux";
import Cart from './Cart';

import {
    updateBag, toggleOrderOverview
} from '../../js/actions/index';

const mapStateToProps = state => {
    return {
        bag: state.bag,
        showOrderOverview: state.showOrderOverview,
    };
};

export default connect(mapStateToProps, {
    toggleOrderOverview,
    updateBag
})(Cart);