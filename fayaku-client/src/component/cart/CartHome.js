import React from 'react'
import CartDetail from './CartDetail'
import TableUserAndOrderHeader from './TableUserAndOrderHeader'

const CartHome = () => {
    return (
        <div className="row">
            <div className="col-12" style={{ height: "60px" }}></div>

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
