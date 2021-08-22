import React, { useState } from 'react'
import GetProduct from './GetProduct'
import { Link, Route } from 'react-router-dom'
import PaginationHome from './PaginationHome'


const GetProductIndex = () => {
    const limit = 3
    const [totalPage, settotalPage] = useState(9)
    const [currentPage, setcurrentPage] = useState(2)

    const onPageChange = (current) => {
        setcurrentPage(current)
        console.log("currentPage:" + currentPage)
    }
    const [Activeindexstate, setActiveindexstate] = useState([' active', ' '])
    // const [indexTabstate, setindexTabstate] = useState(-1)

    
    return (
        <div className="">
            <div className="card text-center ">
                <div className="card-header">
                    <ul className="justify-content-center nav nav-tabs card-header-tabs">
                        {/* <li className="nav-item">
                            <Route>
                                <Link to="" className={`nav-link ${Activeindexstate[0]}`} aria-current="true" onClick={() => tabOnCLick(0)}  >Tất cả sản phẩm</Link>
                            </Route>
                        </li>
                        <li className="nav-item" >
                            <Link to="" className={`nav-link ${Activeindexstate[1]}`} onClick={() => tabOnCLick(1)}>Bán chạy nhất</Link>
                        </li> */}
                      

                    </ul>
                </div>
                <div className="card-body">
                    {/* <h5 class="card-title">Fayaku Shop</h5>
                    <p class="card-text">
                        With supporting text below as a natural lead-in to additional content.
                    </p> */}
                    {/* <Link class="btn btn-primary animated infinite bounce delay-2s">Go somewhere</Link> */}
                </div>
                {/* <GetProduct /> */}
                <div className="container ">
                     <GetProduct current={currentPage} limit={limit} categoryName="SẮP RA MẮT" />
                     {/* <GetProduct current={currentPage} limit={limit} categoryName="BEST SALE" />
                    <GetProduct current={currentPage} limit={limit} categoryName="SOMETHING ELSE" /> */}

                    <div className="row">
                        <div className="col-12" style={{ height: "20px" }}></div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            {/* <PaginationHome totalPage={totalPage} current={currentPage} onPageChange={onPageChange} /> */}

                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default GetProductIndex
