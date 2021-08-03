import React from 'react'

const Register = () => {
    return (
        <>
             <div
                        class="tab-pane fade"
                        id="pills-register"
                        role="tabpanel"
                        aria-labelledby="tab-register"
                    >
                        <form>
                            <div class="text-center mb-3">
                                <p>Đăng ký với:</p>
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

                            <p class="text-center">Hoặc:</p>

                            <div class="form-outline mb-4">
                                <input type="text" id="registerName" class="form-control" />
                                <label class="form-label" for="registerName">Họ và tên:</label>
                                <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "114.4px" }}></div><div class="form-notch-trailing"></div></div>

                            </div>

                            <div class="form-outline mb-4">
                                <input type="text" id="registerUsername" class="form-control" />
                                <label class="form-label" for="registerUsername">Số điện thoại:</label>
                                <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "114.4px" }}></div><div class="form-notch-trailing"></div></div>

                            </div>

                            <div class="form-outline mb-4">
                                <input type="email" id="registerEmail" class="form-control" />
                                <label class="form-label" for="registerEmail">Email</label>
                                <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "114.4px" }}></div><div class="form-notch-trailing"></div></div>

                            </div>

                            <div class="form-outline mb-4">
                                <input type="password" id="registerPassword" class="form-control" />
                                <label class="form-label" for="registerPassword">Mật khẩu:</label>
                                <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "114.4px" }}></div><div class="form-notch-trailing"></div></div>

                            </div>

                            <div class="form-outline mb-4">
                                <input type="password" id="registerRepeatPassword" class="form-control" />
                                <label class="form-label" for="registerRepeatPassword">Xác nhận mật khẩu:</label>
                                <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "114.4px" }}></div><div class="form-notch-trailing"></div></div>

                            </div>

                            <div class="form-check d-flex justify-content-center mb-4">
                                <input
                                    class="form-check-input me-2"
                                    type="checkbox"
                                    value=""
                                    id="registerCheck"
                                    checked
                                    aria-describedby="registerCheckHelpText"
                                />
                                <label class="form-check-label" for="registerCheck">
                                    Tôi đồng ý với điều khoản sử dụng.
                                </label>
                            </div>

                            <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
                        </form>
                    </div>

        </>
    )
}

export default Register
