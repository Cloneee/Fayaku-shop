import { BrowserRouter as Link, useHistory } from "react-router-dom";

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/action/admin/actProduct'
import { getOneProduct } from '../../redux/action/admin/actProduct';
import CarouselProductImage from '../product/CarouselProductImage';
import { Col, Rate, Row } from 'antd';
import PaginationHome from "./PaginationHome";
import ImageForGetPeoduct from "./ImageForGetPeoduct";
import CardProduct from "./CardProduct";

const GetProduct = () => {
  
    const dispatch = useDispatch();
    const listProductsFromStore = useSelector((state) => state.products);
    useEffect(() => {

        dispatch(getAllProducts());

    }, [])
    
  


    
    
    let mapproducts = listProductsFromStore.map((product, index) => {

        
       
        return <CardProduct product={product} index={index} /> 


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



