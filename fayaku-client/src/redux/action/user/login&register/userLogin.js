import axios from "axios";
import { SET_LOGIN_DATA_USER } from "../../../constants/types";
import { AUTH_LOGIN_API } from "../../../constants/api";
export const setLoginDataUserToStore = (loginDataUser) => {
    console.log("set to store")
    return {
        type: SET_LOGIN_DATA_USER,
        loginDataUser,
    };
};
export const getLoginDataUser = (dataFromLoginForm) => {
    // map object to pram
    const params = new URLSearchParams();
    params.append('email', 'example@gmail.com');
    params.append('password', '123456789');
    const url = AUTH_LOGIN_API;
    return (dispatch) => {
        return axios
            .post(url,params)
            .then((res) => {
                console.log('Get sucess!')
                
                dispatch(setLoginDataUserToStore(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};