import axios from "axios";
import { SET_LOGIN_DATA_USER } from "../../../constants/types";
import { AUTH_LOGIN_API } from "../../../constants/api";
export const setLoginDataUserToStore = (loginDataUser) => {
    console.log("get data success")
    return {
        type: SET_LOGIN_DATA_USER,
        loginDataUser,
    };
};
export const getLoginDataUser = (dataFromLoginForm) => {
    // map object to pram
    const params = new URLSearchParams(dataFromLoginForm);
    // params.append('email', 'example@gmail.com');
    // params.append('password', '123456789');
    const url = AUTH_LOGIN_API;
    return (dispatch) => {
        return axios
            .post(url,params)
            .then((res) => {
                console.log(res.data)
                dispatch(setLoginDataUserToStore(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};