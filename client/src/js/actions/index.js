import {
    UPDATE_BAG,
    TOGGLE_ORDER_OVERVIEW
} from "../constants/action-types";

export function updateBag(payload) {
    return { type: UPDATE_BAG, payload }
};

export function toggleOrderOverview(payload) {
    return { type: TOGGLE_ORDER_OVERVIEW, payload }
};

export function addToBag(bagItem) {
    return (dispatch, getState) => {
        const bag = [...getState().bag];

        let alreadyInBag = bag.find(item => item.sku === bagItem.sku);

        if (alreadyInBag) {
            bag.map(item => {
                if (item.sku === bagItem.sku) {
                    item.quantity += bagItem.quantity;
                    return item;
                }
            });
            dispatch(updateBag({ bag }));
        }
        else {
            bag.push(bagItem);
            dispatch(updateBag({ bag }));
        }
    }
}

export function removeFromBag(bagItem) {
    return (dispatch, getState) => {
        const oldBag = [...getState().bag];
        const bag = oldBag.filter(item => item.sku !== bagItem.sku);
        dispatch(updateBag({ bag }));
    }
}

export function updateQuantity(bagItem, quantity) {
    return (dispatch, getState) => {
        const bag = [...getState().bag];
        bag.map(item => {
            if (item.sku === bagItem.sku) {
                item.quantity = quantity;
            }
        })
        dispatch(updateBag({ bag }));
    }
}