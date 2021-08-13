import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { facebookProvider, githubProvider, googleProvider } from '../../config/authMethod'
import { getLoginDataUser } from '../../redux/action/user/login&register/userLogin'
import socalMediaAuth from "../../services/oauth"
import * as Yup from 'yup';

const Login = () => {
    const handleLoginWithSocialMedia = async (provider) => {
        const res = await socalMediaAuth(provider)
        console.log(res)
    }
    const dispath = useDispatch()
    const  [user, setuser] = useState(useSelector(state => state.userLoginData))

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email là bắt buộc')
                .max(45, 'Email quá dài')
                .min(5, 'Email quá ngắn')
                .required('Email là bắt buộc'),
            password: Yup.string()
                .min(6, 'Mật khẩu phải từ 6 ký tự trở lên')
                .required('Mật khẩu là bắt buộc'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          
            dispath(getLoginDataUser(values))
            

        },
    });
    return (
        <>
            
            <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
            >
                <form onSubmit={formik.handleSubmit}>
                    <div class="text-center mb-3">
                        <p>Đăng nhập bằng:</p>
                        <button type="button" onClick={() => handleLoginWithSocialMedia(facebookProvider)} class="btn btn-primary btn-floating mx-1">
                            <i class="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" onClick={() => handleLoginWithSocialMedia(googleProvider)} class="btn btn-primary btn-floating mx-1">
                            <i class="fab fa-google"></i>
                        </button>

                        {/* <button type="button" onClick={()=> handleLoginWithGG(facebookProvider)} class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-twitter"></i>
                                </button> */}

                        {/* <button type="button" onClick={()=> handleLoginWithGG(githubProvider)} class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-github"></i>
                                </button> */}
                    </div>

                    <p class="text-center">Hoặc:</p>

                    <div class="form-outline mb-4">

                        <input type="email" class="form-control" id="email"

                            {...formik.getFieldProps('email')} />
                        <label class="form-label" for="email">Email / Số điện thoại:</label>
                        <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "114.4px" }}></div><div class="form-notch-trailing"></div></div>
                        <div className="form-helper">
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-danger">{formik.errors.email}</div>
                            ) : null}
                        </div>
                    </div>


                    <div class="form-outline mb-4">
                        <input type="password" id="password"  {...formik.getFieldProps('password')} class="form-control" />
                        <label class="form-label" for="password">Mật khẩu:</label>
                        <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "114.4px" }}></div><div class="form-notch-trailing"></div></div>
                        <div className="form-helper">
                            {formik.touched.password     && formik.errors.password ? (
                                <div className="text-danger">{formik.errors.password}</div>
                            ) : null}
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col-md-6 d-flex justify-content-center">
                            <div class="form-check mb-3 mb-md-0">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="loginCheck"
                                // checked
                                />
                                <label class="form-check-label" for="loginCheck"> Nhớ tài khoản/mật khẩu </label>
                            </div>
                        </div>

                        <div class="col-md-6 d-flex justify-content-center">

                            <a href="#!">Quên mật khẩu?  {user.length}</a>
                        </div>
                    </div>
                    <div class="text-center ">
                        <button type="submit" class="btn btn-primary " >Đăng nhập</button>
                    </div>
                    <div class="text-center">
                        {/* <p>Not a member? <Link to="/register">Register</Link></p> */}
                    </div>
                </form>
               
            </div>

        </>
    )
}

export default Login
