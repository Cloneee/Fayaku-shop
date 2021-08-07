import {SET_PRODUCT_PAGINATION} from "../../../constants/types"

let inittial = []
let reducer = (state = inittial,action ) =>{
    let newState = {...state}
	let {type,productPagination} = action;
	if(type===SET_PRODUCT_PAGINATION){
        
		newState = productPagination
		return newState;
	}
	return state
}
export default reducer
