import axios from "axios";
import { SET_CART } from "../../../constants/types";
// import { PRODUCT_PAGINATION_API } from "../../../constants/api";

export const setCartToStore = (cart) => {
    console.log("set to store")
    return {
        type: SET_CART,
        cart,
    };
};

