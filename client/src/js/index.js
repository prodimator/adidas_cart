import store from "../js/store/index";
import {
    addToBag,
    updateBag
} from "../js/actions/index";

window.store = store;
window.updateBag = updateBag;
window.addToBag = addToBag;