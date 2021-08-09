import {SET_CART} from "../../../constants/types"

let inittial = []
let reducer = (state = inittial,action ) =>{
    let newState = {...state}
	let {type,cart} = action;
	if(type===SET_CART){
        
		newState = cart
		return newState;
	}
	return state
}
export default reducer
