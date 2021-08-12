import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Link, NavLink, useHistory } from "react-router-dom";

import logo from '../assets/image/WTM.png'
import { getCartFromLocalStorage } from '../redux/action/user/cart&order/cart';
const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
 
    const [indexHeader, setindexHeader] = useState(0)
    const cartFromStore = useSelector((state) => state.cart);
    // if (cartFromStore.length>0) dispatch(getCartFromLocalStorage(2))
 
    


    const [valueHeaderClass, setvalueHeaderClass] = useState([' active', ' '])
    const headerOnClick = (CurrentIndexOfHeader) => {
        setindexHeader(CurrentIndexOfHeader)
        let temp = [...valueHeaderClass]
        temp.fill('')
        temp[CurrentIndexOfHeader] = ' active'
        setvalueHeaderClass(CurrentIndexOfHeader)
        setvalueHeaderClass(temp)
        console.log('xx' + valueHeaderClass + indexHeader)

    }
    const handleCartButtonOnClick= () =>{
        history.push('/gio-hang')
    }




    return (

        <header>

          

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <a class="navbar-brand mt-2 mt-lg-0" href="/trang-chu">
                            <img
                                src={logo}
                                height="15"
                                alt=""
                                loading="lazy"
                            />
                        </a>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>
                                <NavLink to="/trang-chu" className="nav-link" activeClassName="nav-link active">
                                    <strong>Trang chủ</strong>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/bo-suu-tap" className="nav-link" activeClassName="nav-link active">
                                    <strong>Bộ sưu tập</strong>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faq3" className="nav-link" activeClassName="nav-link active">
                                    <strong>Khác</strong>
                                </NavLink>
                            </li>


                        </ul>
                    </div>

                    <div class="d-flex align-items-center">
                        <a class="text-reset me-3 " onClick={()=>handleCartButtonOnClick()}  >
                            <i class="fas fa-shopping-cart"></i>
                            {cartFromStore===null ? <span class="badge rounded-pill badge-notification bg-danger">0</span>
                                : <span class="badge rounded-pill badge-notification bg-danger">{cartFromStore.length}</span>
                            }
                        </a>

                        <a
                            class="text-reset me-3 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i class="fas fa-bell"></i>
                            <span class="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a class="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>

                        <a
                            class="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                                class="rounded-circle"
                                height="25"
                                alt=""
                                loading="lazy"
                            />
                        </a>
                        <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a class="dropdown-item" href="#">My profile</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>




        </header>

    )


}

export default Header
