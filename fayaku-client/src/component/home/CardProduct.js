import { Rate } from 'antd'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ImageForGetPeoduct from './ImageForGetPeoduct'

const CardProduct = (props) => {
    let { product, index } = props
    const [indexMouse, setindexMouse] = useState(-1)
    const mouseEnterOnProduct = (id) => {
        console.log(id)
        setindexMouse(id)
    }
    const history = useHistory();
    const productOnClick = (id) => {
        console.log(id)
        let path = `/san-pham/` + id;
        history.push(path);


    }
    let nf = new Intl.NumberFormat();
    let price = nf.format(product.price);
    const [currentImageIndex, setcurrentImageIndex] = useState(0)
    const onChangeProductImageCard = (currentImage) => {

        setcurrentImageIndex(currentImage)

    }
    return (
        <>
            <div className="col-lg-3 col-sm-4 d-flex hover-overlay" type="button" data-mdb-toggle="tooltip"
                title={product.name} >
                <div class={indexMouse === index ? "card  hover-shadow " : "card  shadow-5"} onMouseEnter={() => mouseEnterOnProduct(index)}>
                    <div  onClick={()=>productOnClick(product._id)}
                        class="mask"
                        style={{ "backgroundColor": "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                    {/* <div class="card-header text-center"><em><strong>NAME OF PRODUCT</strong></em></div> */}

                    <img
                        src={product.image[currentImageIndex]}
                        class="card-img-top imgproduct "
                        alt="..."
                    />


                    <div class="card-body container">
                        <div className="row">
                            <h5 class="card-text text-truncate col-12" ><em><strong>{product.name}</strong></em></h5>
                            <div className="col-2">
                                <button type="button" class="btn btn-dark btn-floating mx-1"
                                    onClick={() => onChangeProductImageCard(currentImageIndex - 1)}
                                    disabled={currentImageIndex === 0}
                                >
                                    <i class="fas fa-angle-left"></i>
                                </button>
                            </div>
                            <div className="col-7">
                                <div class="">

                                    <strong className="text-danger">{price} Yên </strong>
                                    <br></br>
                                    <strong >Đã bán: {product.sale}</strong>

                                </div>
                                <div className="row">
                                    <Rate allowHalf defaultValue={product.avrating} disabled />
                                    {/* <div class="btn btn-danger w-50 " key={index} onClick={() => productOnClick(product.productId)}><i class="fas fa-shopping-bag" ></i> Mua</div> */}
                                    {/* <div class="btn btn-dark w-50 " onClick={() => updateProductOnClick(product.productId)}><i class="fas fa-edit"></i> Chỉnh sửa</div> */}
                                </div>

                            </div>
                            <div className="col-2 ">
                                <button type="button" class="btn btn-dark btn-floating mx-1"
                                    onClick={() => onChangeProductImageCard(currentImageIndex + 1)}
                                    disabled={currentImageIndex === product.image.length - 1}

                                >
                                    <i class="fas fa-angle-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class=" container card-footer">
                        <div className="row">
                            {/* <strong className="">{price} VNĐ</strong> */}
                            <div className="btn-rounded text-light  bg-info col-4" ><strong>Best Sale</strong></div>
                            {/* <div className="btn-rounded text-light bg-danger col-4" ><strong>Best Sale</strong></div> */}
                            <div className="btn-rounded text-light bgColorGray w-80 col-8"  ><strong>Ngừng kinh doanh</strong></div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProduct
