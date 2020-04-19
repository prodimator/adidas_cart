import {
    UPDATE_BAG
} from "../constants/action-types";

export function updateBag(payload) {
    return { type: UPDATE_BAG, payload }
};

export function addToBag(bagItem) {
    return (dispatch, getState) => {
        const bag = [...getState().bag];

        let alreadyInBag = bag.find(item => item.sku === bagItem.sku);

        if (alreadyInBag) {
            bag.map(item => {
                if (item.sku === bagItem.sku) {
                    item.quantity += bagItem.quantity
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
        const bag = [...getState().bag];
        const updatedBag = bag.filter(item => item.sku !== bagItem.sku);
        dispatch(updateBag({ updatedBag }));
    }
}

export function updateQuantity(bagItem, quantity) {
    console.log("quantity ", quantity);
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