import React from 'react'
import Login from './Login'
import Register from './Register'
const FormLoginRegister = () => {
    return (
        <>
            <div className="col-3"></div>
            <div className="border p-4 col-6  ">
                <ul class="nav nav-pills nav-justified " id="ex1" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a
                            class="nav-link active "
                            id="tab-login"
                            data-mdb-toggle="pill"
                            href="#pills-login"
                            role="tab"
                            aria-controls="pills-login"
                            aria-selected="true"
                        >Đăng nhập</a
                        >
                    </li>
                    <li class="nav-item" role="presentation">
                        <a
                            class="nav-link"
                            id="tab-register"
                            data-mdb-toggle="pill"
                            href="#pills-register"
                            role="tab"
                            aria-controls="pills-register"
                            aria-selected="false"
                        >Đăng ký</a
                        >
                    </li>
                </ul>

                <div class="tab-content">
                    <Login/>
                    <Register/>
                </div>
            </div>

        </>
    )
}

export default FormLoginRegister
