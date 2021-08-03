import { BrowserRouter as Link, useHistory } from "react-router-dom";

// import Animate from 'animate.css-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/action/admin/actProduct'
import { getOneProduct } from '../../redux/action/admin/actProduct';
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

        let path = `/san-pham/cap-nhat/` + id;
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
        let mapProductImageButton = product.image.map((image, index) => {
            if(index===0) return  <button
            type="button"
            data-mdb-target={`#carousel-product${index}`}
            data-mdb-slide-to={index}
            class="active"
            aria-current="true"
            aria-label={`Slide ${index+1}`}
        ></button>
            return <button
            type="button"
            data-mdb-target={`#carousel-product${index}`}
            data-mdb-slide-to={`${index}`}
            aria-current="true"
            aria-label={`Slide ${index+1}`}
        ></button>
        })
        return <div className="col-lg-3 col-sm-4 d-flex ">
            <div class={indexMouse === index ? " card  hover-shadow " : " card  shadow-3 "} onMouseEnter={() => mouseEnterOnProduct(index)}>

                {/* <div class="card-header text-center"><em><strong>NAME OF PRODUCT</strong></em></div> */}

                {/* <img
                    src={indexMouse === index ? product.image[0] : product.image[1]}
                    class="card-img-top imgproduct"
                    alt="..."
                /> */}



                 <div  className="">
                    <div
                        id={`carousel-product${index}`}
                        class="carousel slide carousel-fade "
                        data-mdb-ride="carousel"
                    >
                        <div class="carousel-indicators">
                            {/* {mapProductImageButton} */}
                            <button
                                type="button"
                                data-mdb-target={`#carousel-product${index}`}
                                data-mdb-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-mdb-target={`#carousel-product${index}`}
                                data-mdb-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-mdb-target={`#carousel-product${index}`}
                                data-mdb-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>

                        <div class=" carousel-inner ">
                            <div class="carousel-item active ">
                                
                                <img
                                    src={product.image[0]}
                                    class="card-img imgproduct  "
                                    alt="..."
                                />
                               

                            </div>

                            <div class="carousel-item ">
                                <img
                                    src={product.image[1]}
                                    class="w-100 "
                                    alt="..."
                                />

                            </div>

                            <div class="carousel-item  ">
                                <img
                                    src={product.image[2]}
                                    class="w-100 "
                                    alt="..."
                                />

                            </div>
                        </div>

                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-mdb-target={`#carousel-product${index}`}
                            data-mdb-slide="prev"
                        >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-mdb-target={`#carousel-product${index}`}
                            data-mdb-slide="next"
                        >
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div> 
                {/*  */}
                <div class="  card-body">
                    <h5 class=" "><em><strong>{product.name}</strong></em></h5>
                    <div className="">
                        
                            <p>
                                <strong className="text-danger">{price} VNĐ</strong>
                                <br></br>
                                <strong >Đã bán: {product.sale}</strong>
                                <br></br>
                            </p>
                        
                        <div className="">
                            <div class="btn btn-danger w-50 " key={index} onClick={() => productOnClick(product._id)}><i class="fas fa-shopping-bag" ></i> Mua</div>
                            <div class="btn btn-dark w-50 " onClick={() => updateProductOnClick(product.productId)}><i class="fas fa-edit"></i> Chỉnh sửa</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>




    })

    return (

        <div className="container">
            <div class="row gy-3">
                {mapproducts}
                {listProductsFromStore.length}

            </div>
        </div>

    )
}

export default GetProduct
