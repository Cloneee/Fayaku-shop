import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProduct } from '../../redux/action/admin/actProduct'

const CartItem = (props) => {
    const dispatch = useDispatch()
    let {cartItem,index,checkedAll} = props
    const [cart, setcart] = useState(useSelector(state => state.cart))
    const [quantity, setquantity] = useState(cartItem.qtt)
    const handleQuantityChange= (newQuantity) =>{
        
    }
    useEffect(() => {
        //   dispatch(getOneProduct(cartItem.productId))
    }, [])
    return (
        <>
            <div className="card-body">
        <div class="form-check float-start col-5">
            <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked= {checkedAll==="true"}
            />

            <label className="form-check-label" for="flexCheckDefault">
                Tên sản phẩm {index}
            </label>
        </div>
        <div class="form-check float-start col-2">

            <label >
                VNĐ
            </label>
        </div>
        <div class="form-check float-start col-2">

            <i class="fas fa-plus " type="button" ></i> {quantity} <i class="fas fa-minus" type="button"></i>

        </div>
        <div class="form-check float-start col-2">

            <label className="text-danger">
                <strong>0.000 VNĐ</strong>
            </label>
        </div>
        <div class="form-check float-start col-1" type="button">

            <i class="fas fa-trash"></i>
        </div>
    </div> 
        </>
    )
}

export default CartItem
