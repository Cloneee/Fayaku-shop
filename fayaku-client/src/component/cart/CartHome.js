import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartDetail from './CartDetail'
import TableUserAndOrderHeader from './TableUserAndOrderHeader'

const CartHome = () => {
    const [cartFromStore, setcartFromStore] = useState(useSelector(state => state.cart))
    return (
        <div className="row">
            <div className="col-12" style={{ height: "60px" }}></div>
            <div className="col-12" style={{ height: "60px" }}>|  Giỏ hàng</div>

            <div className="row">
              
                <div className="col-9"  >
                    <CartDetail />
                </div>
                <div className="col-3">
                    <TableUserAndOrderHeader />
                </div>
            </div>
        </div >
    )
}

export default CartHome
