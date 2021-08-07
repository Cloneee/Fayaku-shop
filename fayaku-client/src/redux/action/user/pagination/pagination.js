import axios from "axios";
import { SET_PRODUCT_PAGINATION } from "../../constants/types";
import { PRODUCT_PAGINATION_API } from "../../../constants/api";

export const setProductPaginationToStore = (productPagination) => {
    console.log("set to store")
    return {
        type: SET_PRODUCT_PAGINATION,
        productPagination,
    };
};
export const getProductPagination = () => {
    
    const url = PRODUCT_PAGINATION_API ;
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                console.log('Get OBJECT PAGINATION sucess!')
                
                dispatch(setProductPaginationToStore(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
