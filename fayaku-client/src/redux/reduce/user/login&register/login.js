import {SET_LOGIN_DATA_USER} from "../../../constants/types"

let inittial = {}
let reducer = (state = inittial,action ) =>{
    let newState = {...state}
	let {type,userLoginData} = action;
	if(type===SET_LOGIN_DATA_USER){
        
		newState = userLoginData
		return newState;
	}
	return state
}
export default reducer