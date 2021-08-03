import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
             <div
                        class="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                    >
                        <form>
                            <div class="text-center mb-3">
                                <p>Đăng nhập bằng:</p>
                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-google"></i>
                                </button>

                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-twitter"></i>
                                </button>

                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-github"></i>
                                </button>
                            </div>

                            <p class="text-center">or:</p>

                            <div class="form-outline mb-4">
                                <input type="email" id="loginName" class="form-control" />
                                <label class="form-label" for="loginName">Email / Số điện thoại:</label>
                                <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "114.4px" }}></div><div class="form-notch-trailing"></div></div>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="password" id="loginPassword" class="form-control" />
                                <label class="form-label" for="loginPassword">Mật khẩu:</label>
                                <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "114.4px" }}></div><div class="form-notch-trailing"></div></div>

                            </div>

                            <div class="row mb-4">
                                <div class="col-md-6 d-flex justify-content-center">
                                    <div class="form-check mb-3 mb-md-0">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="loginCheck"
                                            checked
                                        />
                                        <label class="form-check-label" for="loginCheck"> Remember me </label>
                                    </div>
                                </div>

                                <div class="col-md-6 d-flex justify-content-center">

                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary btn-block mb-4">Đăng nhập</button>

                            <div class="text-center">
                                {/* <p>Not a member? <Link to="/register">Register</Link></p> */}
                            </div>
                        </form>
                    </div>

        </>
    )
}

export default Login
