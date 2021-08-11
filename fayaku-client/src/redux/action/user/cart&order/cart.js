import axios from "axios";
import { SET_CART } from "../../../constants/types";
// import { PRODUCT_PAGINATION_API } from "../../../constants/api";

export const setCartToStore = (cart) => {
    return {
        type: SET_CART,
        cart,
    };
};
export const getCartFromLocalStorage = (cartArray) => {
  
    return (dispatch) => {
            
        dispatch(setCartToStore(cartArray));
        localStorage.setItem("cart", JSON.stringify(cartArray))


    };
}
