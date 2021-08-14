import axios from "axios";
import { SET_ALL_PRODUCTS,SET_ONE_PRODUCT ,SET_MESSAGE_ADD_PRODUCT} from "../../constants/types";
import { ONE_PRODUCT_API,ALL_PRODUCT_API } from "../../constants/api";
export const setOneProductToStore = (product) => {
    return {
        type: SET_ONE_PRODUCT,
        product,
    };
};
export const getOneProduct = (id) => {
    console.log(id)
    let url = 'http://localhost:8000/api/product/' + id;
    console.log(url)
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                console.log('Get sucess!')
                
                dispatch(setOneProductToStore(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
export const setAllProductsToStore = (products) => {
    return {
        type: SET_ALL_PRODUCTS,
        products,
    };
};
export const getAllProducts = () => {
    const url = ALL_PRODUCT_API;
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                // console.log('Get sucess!')
                dispatch(setAllProductsToStore(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
export const updateProduct = (product) => {
    const url = ONE_PRODUCT_API;
    return (dispatch) => {
        return axios
            .put(url,product)
            .then((resp) => {
                dispatch({
                    type: SET_MESSAGE_ADD_PRODUCT,
                    payload: resp.data.message,
                });
                return Promise.resolve();
            })
            .catch((err) => {
                const message =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();

                dispatch({
                    type: SET_MESSAGE_ADD_PRODUCT,
                    payload: message,
                });
                return Promise.reject();
            });
    };
};