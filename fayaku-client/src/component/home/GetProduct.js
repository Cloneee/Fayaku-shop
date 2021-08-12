import { BrowserRouter as Link, useHistory } from "react-router-dom";

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductPagination } from "../../redux/action/user/pagination/pagination";
import { Col, Rate, Row } from 'antd';
import PaginationHome from "./PaginationHome";
import ImageForGetPeoduct from "./ImageForGetPeoduct";
import CardProduct from "./CardProduct";
import TypeProductHeader from "./TypeProductHeader"

const GetProduct = (props) => {
    let {limit,current} = props
    const dispatch = useDispatch();
    const listProductsFromStore = useSelector((state) => state.productPagination);
    useEffect(() => {
        dispatch(getProductPagination(limit,current))

    }, [current])
    
  


    
    
    let mapproducts = listProductsFromStore.map((product, index) => {

        
       
        return <CardProduct product={product} index={index} /> 


    })

    return (
        <div className="container">
            <div className="row gy-3">
               <TypeProductHeader />
                {mapproducts}
                <div className="col-12" style={{height:"20px"}}></div>
            </div>

        </div>

    )
}

export default GetProduct



