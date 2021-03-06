import React, { useState } from 'react'
import {  useSelector } from 'react-redux';
import { BrowserRouter as Link, NavLink, useHistory } from "react-router-dom";

import logo from '../assets/image/WTM.png'
import HeaderLogged from './login&register/HeaderLogged';
import HeaderNotLoggedYet from './login&register/HeaderNotLoggedYet';
const Header = () => {
    const history = useHistory();
 
    const [indexHeader, setindexHeader] = useState(0)
    const cartFromStore = useSelector((state) => state.cart);
    // if (cartFromStore.length>0) dispatch(getCartFromLocalStorage(2))
    const user = useSelector(state => state.loginDataUser)
    


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

          

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="navbar-brand mt-2 mt-lg-0" href="/trang-chu">
                            <img
                                src={logo}
                                height="15"
                                alt=""
                                loading="lazy"
                            />
                        </a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>
                                <NavLink to="/trang-chu" className="nav-link" activeClassName="nav-link active">
                                    <strong>Trang ch???</strong>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/bo-suu-tap" className="nav-link" activeClassName="nav-link active">
                                    <strong>B??? s??u t???p</strong>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faq3" className="nav-link" activeClassName="nav-link active">
                                    <strong>Kh??c</strong>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faq3" className="nav-link" activeClassName="nav-link active">
                                    <strong>{user.length}</strong>
                                </NavLink>
                            </li>


                        </ul>
                    </div>

                    <div className="d-flex align-items-center">
                        <a className="text-reset me-3 " onClick={()=>handleCartButtonOnClick()}  >
                            <i className="fas fa-shopping-cart"></i>
                            {cartFromStore===null ? <span class="badge rounded-pill badge-notification bg-danger">0</span>
                                : <span className="badge rounded-pill badge-notification bg-danger">{cartFromStore.length}</span>
                            }
                        </a>

                        <div
                            className="text-reset me-3 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fas fa-bell"></i>
                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                        </div>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a className="dropdown-item" href="#">xxx</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>

                       {user.code===1  ? <HeaderLogged/> : <HeaderNotLoggedYet/>}
                       {/* <HeaderNotLoggedYet /> */}
                    </div>
                </div>
            </nav>




        </header>

    )


}

export default Header
