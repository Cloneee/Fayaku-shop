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
        console.log(product.image[1].naturalWidth)
        let nf = new Intl.NumberFormat();
        let price = nf.format(product.price);

        return <div className="col-lg-3 col-sm-4 d-flex ">
            <div class={indexMouse === index ? "card  hover-shadow " : "card  shadow-3"} onMouseEnter={() => mouseEnterOnProduct(index)}>

                {/* <div class="card-header text-center"><em><strong>NAME OF PRODUCT</strong></em></div> */}

                <img
                    src={product.image[1]}
                    class="card-img-top imgproduct"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-text "><em><strong>{product.name}</strong></em></h5>
                    <div className="">
                        <div class="">
                            <p>
                                <strong className="text-danger">{price} VNĐ</strong>
                                <br></br>
                                <strong >Đã bán: {product.sale}</strong>
                                <br></br>
                            </p>
                        </div>
                        <div className = "">
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
