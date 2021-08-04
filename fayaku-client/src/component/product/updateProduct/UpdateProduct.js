import { useFormik, } from 'formik';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../../redux/action/admin/actProduct';
import CarouselProductImage from '../CarouselProductImage';
import FormUpdatePoduct from './FormUpdateProduct';
import FormUpdatePoductMini from './FormUpdateProductMini';
const UpdateProduct = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const productFromStore = useSelector((state) => state.productByID)
    let product = productFromStore
    useEffect(() => {
        console.log(id)
        dispatch(getOneProduct(id));
        return () => {
        }
    }, [])
    const contentStyle = {
        height: '20px',
       
    };


    return (
        <>
            {product._id === id ?
                <div className="row  " >

                    <div className=" text-center bg-light ">
                        <br></br>
                        <strong>TK'Shop <i class="fas fa-angle-right"></i>  Sản phẩm <i class="fas fa-angle-right"></i> {product.name} (ID: {product._id}) </strong> <i class="fas fa-angle-right"></i> <strong>Cập nhật</strong>
                        <br></br>
                        <span> </span>
                        <div className="w-100" style={contentStyle}></div>
                    </div>

                    <div className="col-lg-3 col-sm-4 ">
                    <div className="w-100" style={contentStyle}></div>
                        <CarouselProductImage product={product} type="actions card on" />

                    </div>
                    <div className="container col-lg-9 col-sm-4 gx-5 ">
                        {/* <div className="  text-center  ">
                    <h1>Cập nhật sản phẩm</h1>
                </div> */}
                        <br></br>
                        {/* <FormUpdateProduct product = {product}/> */}
                        {/* <FormUpdatePoduct product={productFromStore} /> */}
                        <FormUpdatePoductMini  product={productFromStore} /> 
                    </div>


                </div>
                : <div><strong>Somethings wrong, please try again!</strong></div>}
        </>
    )
}

export default UpdateProduct
