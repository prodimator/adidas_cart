import { connect } from "react-redux";
import OrderSummary from './OrderSummary';

import {
    toggleOrderOverview
} from '../../js/actions/index';

const mapStateToProps = state => {
    return {
        bag: state.bag,
        showOrderOverview: state.showOrderOverview
    };
};

export default connect(mapStateToProps, {
    toggleOrderOverview
})(OrderSummary);