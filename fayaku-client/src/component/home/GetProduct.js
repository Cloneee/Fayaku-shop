import { BrowserRouter as Link, useHistory } from "react-router-dom";

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductPagination } from "../../redux/action/user/pagination/pagination";
import CardProduct from "./CardProduct";
import TypeProductHeader from "./TypeProductHeader"

const GetProduct = (props) => {
    let {limit,current,categoryName} = props
    const dispatch = useDispatch();
    const listProductsFromStore = useSelector((state) => state.productPagination);
    let products = listProductsFromStore.products
    useEffect(() => {
        dispatch(getProductPagination(limit,current))
    }, [current])
    console.log(products)
    let mapproducts


   let handleGetProductChange = (products) =>{
     mapproducts = products.map((product, index) => {

        return <CardProduct key={index} product={product} index={index} /> 


    })
   }
    

    return (
        <div className="container">
            <div className="row ">
               <TypeProductHeader categoryName={categoryName} />
               {products!== undefined ? handleGetProductChange(products) : null }
               {products!== undefined ? mapproducts : null }
                {/* {mapproducts} */}
                {/* {listProductsFromStore.products.length} */}
                <div className="col-12" style={{height:"20px"}}></div>
            </div>

        </div>

    )
}

export default GetProduct



