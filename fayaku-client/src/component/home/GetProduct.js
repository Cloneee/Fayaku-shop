import { BrowserRouter as Link, useHistory } from "react-router-dom";

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/action/admin/actProduct'
import { getOneProduct } from '../../redux/action/admin/actProduct';
import CarouselProductImage from '../product/CarouselProductImage';
import { Col, Rate, Row } from 'antd';
import PaginationHome from "./PaginationHome";

const GetProduct = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const listProductsFromStore = useSelector((state) => state.products);
    const [indexMouse, setindexMouse] = useState(-1)

    useEffect(() => {

        dispatch(getAllProducts());

        // return () => {

        // }
    }, [])
    const productOnClick = (id) => {
        let path = `/san-pham/` + id;
        history.push(path);


    }
    const updateProductOnClick = (id) => {

        let path = `admin/san-pham/cap-nhat/` + id;
        console.log(path)
        history.push(path);


    }



    const mouseEnterOnProduct = (id) => {
        console.log(id)
        setindexMouse(id)
    }
    let mapproducts = listProductsFromStore.map((product, index) => {
        console.log(product.image[0].naturalWidth)
        let nf = new Intl.NumberFormat();
        let price = nf.format(product.price);

        return <div className="col-lg-3 col-sm-4 d-flex hover-overlay">
            <div class={indexMouse === index ? "card  hover-shadow " : "card  shadow-3"} onMouseEnter={() => mouseEnterOnProduct(index)}>
                <div
                    class="mask"
                    style={{"backgroundColor":"rgba(251, 251, 251, 0.2)"}}
                ></div>
                {/* <div class="card-header text-center"><em><strong>NAME OF PRODUCT</strong></em></div> */}

                <img
                    src={product.image[0]}
                    class="card-img-top imgproduct "
                    alt="..."
                />


                <div class="card-body">
                    <h5 class="card-text text-truncate"><em><strong>{product.name}</strong></em></h5>
                    <div className="">
                        <div class="">

                            <strong className="text-danger">{price} VNĐ</strong>
                            <br></br>
                            <strong >Đã bán: {product.sale}</strong>

                        </div>
                        <div className="row">
                            <Rate allowHalf defaultValue={product.avrating} disabled />
                            {/* <div class="btn btn-danger w-50 " key={index} onClick={() => productOnClick(product.productId)}><i class="fas fa-shopping-bag" ></i> Mua</div> */}
                            {/* <div class="btn btn-dark w-50 " onClick={() => updateProductOnClick(product.productId)}><i class="fas fa-edit"></i> Chỉnh sửa</div> */}
                        </div>

                    </div>
                </div>
                <div class="card-footer">
                    {/* <strong className="">{price} VNĐ</strong> */}
                    <div className="btn-rounded text-light  bg-info w-40" ><strong>Best Sale</strong></div>
                    {/* <div className="btn-rounded text-light bg-danger col-4" ><strong>Best Sale</strong></div> */}
                    <div className="btn-rounded text-light bgColorGray w-80"  ><strong>Ngừng kinh doanh</strong></div>



                </div>
            </div>
        </div>


    })

    return (
        <div className="container">
            <div className="row gy-3">
                {mapproducts}
            </div>

        </div>

    )
}

export default GetProduct



