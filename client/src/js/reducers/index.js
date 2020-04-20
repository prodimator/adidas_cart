import {
    UPDATE_BAG,
    TOGGLE_ORDER_OVERVIEW
} from "../constants/action-types";


const initialState = {
    bag: [],
    showOrderOverview: false,
};

function rootReducer(state = initialState, action) {
    if (action.type === UPDATE_BAG) {
        if (!action.payload.bag) {
            return Object.assign({}, state, {
                bag: []
            });
        }
        else {
            return Object.assign({}, state, {
                bag: action.payload.bag
            });
        }
    }

    if (action.type === TOGGLE_ORDER_OVERVIEW) {
        return Object.assign({}, state, {
            showOrderOverview: action.payload.showOrderOverview
        });
    }
    return state;

};

export default rootReducer;