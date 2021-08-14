import axios from "axios";
import { SET_LOGIN_DATA_USER } from "../../../constants/types";
import { AUTH_LOGIN_API } from "../../../constants/api";
export const setLoginDataUserToStore = (loginDataUser) => {
    console.log(loginDataUser)
    return {
        type: SET_LOGIN_DATA_USER,
        loginDataUser,
    };
};
export const getLoginDataUser = (dataFromLoginForm) => {
    const params = new URLSearchParams(dataFromLoginForm);

    const url = AUTH_LOGIN_API;
    return (dispatch) => {
        return axios
            .post(url,params)
            .then((res) => {
                dispatch(setLoginDataUserToStore(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};