import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartDetail = (props) => {
    const [cart, setcart] = useState(useSelector(state => state.cart))
    const exportCart = cart.map((cartItem,index)=>{
        return <CartItem index = {index} cartItem={cartItem} checkedAll="true" />
    })
    return (
        <div className="">

            <div className="">
                <div className="container ">
                    
                    <div className="card row ">
                        <div className="card-header ">
                            <div class="form-check float-start col-5">
                                <input
                                    className="form-check-input "
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                   
                                />
                                <label className="form-check-label" for="flexCheckDefault">
                                    {`Tất cả ( ${cart.length} sản phẩm )`}
                                </label>
                            </div>
                            <div class="form-check float-start col-2">

                                <label >
                                    Đơn giá
                                </label>
                            </div>
                            <div class="form-check float-start col-2">

                                <label >
                                    Số lượng
                                </label>
                            </div>
                            <div class="form-check float-start col-2">

                                <label >
                                    Thành tiền
                                </label>
                            </div>
                            <div class="form-check float-start col-1">

                                <i class="fas fa-trash" data-mdb-toggle="tooltip"
                                    data-mdb-placement="top"
                                    title="Xoá mục đã chọn">
                                </i>
                            </div>
                        </div>
                        <br></br>
                        {exportCart}

                    </div>

                </div>

            </div>
        </div>
    )
}

export default CartDetail
