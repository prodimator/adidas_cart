import {
    UPDATE_BAG
} from "../constants/action-types";


const initialState = {
    bag: [],
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
    return state;

};

export default rootReducer;