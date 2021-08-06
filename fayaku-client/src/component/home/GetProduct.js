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

        return <Col span={6} className="gutter-row " >
            <div class={indexMouse === index ? "   hover-shadow " : "   shadow-3 "} onMouseEnter={() => mouseEnterOnProduct(index)}>
                <CarouselProductImage product={product} type="actions card on" />
            </div>
        </Col>




    })

    return (
        <Row gutter={[16, 24]} type="flex">

            {mapproducts}
            <Col span={24} className="gutter-row text-center">
                {/* <PaginationHome /> */}
            </Col>

        </Row>

    )
}

export default GetProduct
