import axios from "axios";
import { SET_PRODUCT_PAGINATION } from "../../../constants/types";
import { PRODUCT_PAGINATION_API } from "../../../constants/api";

export const setProductPaginationToStore = (productPagination) => {
    
    return {
        type: SET_PRODUCT_PAGINATION,
        productPagination,
    };
};
export const getProductPagination = (limit,page) => {
    
    const url = PRODUCT_PAGINATION_API +"?limit="+limit+"&page="+page ;
    console.log(url)
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
