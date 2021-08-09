import { Rate } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getOneProduct } from "../../../redux/action/admin/actProduct"
import CarouselProductImage from '../CarouselProductImage'

const ProductDetail = () => {
    const { id } = useParams()
    const history = useHistory();
    const dispatch = useDispatch();
    const [buyQTT, setbuyQTT] = useState(1)
    const productsFromStore = useSelector((state) => state.productByID);
    let product = productsFromStore
    const buyQttOnChange = (buy) => {
        setbuyQTT(buy)


    }
    useEffect(() => {

        dispatch(getOneProduct(id));
        product = productsFromStore;
        // }
    }, [])




    return (
        <div>
            {product._id === id ?
                <div className="">

                    <div className="row" >
                        <div className="col-12  text-center bg-light">
                            <br></br>
                            <strong>TK'Shop <i class="fas fa-angle-right"></i> Đặt hàng <i class="fas fa-angle-right"></i> {product.name}</strong>

                        </div>
                        <div className="col-lg-3 col-sm-4">
                            <CarouselProductImage product={product} />
                        </div>

                        <div className="col-lg-9 col-sm-8  text-left">
                            <div className="container">
                                <div className=" text-left col-12" style={{ height: "20px" }}>
                                    {/* <Rate allowHalf defaultValue={product.avrating} disabled /> */}

                                </div>
                                <div className="justify-content-center  col-12">
                                    <h3><strong> {product.name}</strong></h3>

                                </div>
                                <div className=" text-left col-12">
                                    <strong>Rating: </strong>
                                    <Rate allowHalf defaultValue={product.avrating} disabled /> |
                                    <strong> Bộ sưu tập: </strong> <span className="btn-rounded text-light bg-info" type="button" style={{ padding: "5px" }}><strong>{product.category}</strong></span>


                                </div>
                                <div className=" text-left col-12">

                                    <strong>Trạng thái: </strong> <span className="btn-rounded text-light bg-success" type="button" style={{ padding: "5px" }}><strong>{product.category}</strong></span>


                                </div>
                                <div className="justify-content-center  col-12">
                                    <strong>Giá bán: </strong> <span style={{ color: "red" }}>{product.price} Yên</span>
                                </div>
                                <div className=" text-left col-12" style={{ height: "20px" }}>
                                    {/* <Rate allowHalf defaultValue={product.avrating} disabled /> */}

                                </div>
                                <div className="justify-content-center  col-12">
                                    <button type="button" class="btn btn-dark btn-floating mx-1"
                                        onClick={() => buyQttOnChange(buyQTT - 1)} disabled={buyQTT === 1}

                                    // disabled={currentImageIndex === product.image.length - 1}

                                    >
                                        <i class="fas fa-minus"></i>                                    </button> <span className="" style={{ fontSize: "25px" }} ><strong>{buyQTT}</strong></span>
                                    <button type="button" class="btn btn-dark btn-floating mx-1"
                                        onClick={() => buyQttOnChange(buyQTT + 1)}
                                    // disabled={currentImageIndex === product.image.length - 1}

                                    >
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                                <div className=" text-left col-12" style={{ height: "20px" }}>
                                    {/* <Rate allowHalf defaultValue={product.avrating} disabled /> */}

                                </div>
                                <div className="justify-content-center  col-12">
                                    <strong>Mô tả:</strong>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                    </p>
                                </div>
                                <div className="justify-content-center  col-12">
                                    <button className="btn btn-danger w-80">Đặt mua</button>
                                </div>

                            </div>




                        </div>

                    </div>




                </div>
                : <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>}
        </div>)
}

export default ProductDetail
