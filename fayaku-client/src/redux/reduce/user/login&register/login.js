import {SET_LOGIN_DATA_USER} from "../../../constants/types"

let inittial = {}
let reducer = (state = inittial,action ) =>{
    let newState = {...state}
	let {type,userLogindata} = action;
	if(type===SET_LOGIN_DATA_USER){
        
		newState = userLogindata
		return newState;
	}
	return state
}
export default reducer