import store from "../js/store/index";
import {
    addToBag,
    toggleOrderOverview,
    updateBag
} from "../js/actions/index";

window.store = store;
window.updateBag = updateBag;
window.addToBag = addToBag;
window.toggleOrderOverview = toggleOrderOverview;