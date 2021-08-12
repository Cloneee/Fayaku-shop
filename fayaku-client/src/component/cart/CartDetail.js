import React from 'react'

const CartDetail = () => {
    return (
        <div className="">
           
            <div className="">
                <div className="container ">
                <strong><h5>Giỏ hàng:</h5></strong>
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
                                    Tất cả (10 sản phẩm)
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
                        <div className="card-body">
                            <div class="form-check float-start col-5">
                                <input
                                    className="form-check-input "
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />

                                <label className="form-check-label" for="flexCheckDefault">
                                    Tên sản phẩm
                                </label>
                            </div>
                            <div class="form-check float-start col-2">

                                <label >
                                    VNĐ
                                </label>
                            </div>
                            <div class="form-check float-start col-2">

                                <i class="fas fa-plus" type="button"></i> 5 <i class="fas fa-minus" type="button"></i>

                            </div>
                            <div class="form-check float-start col-2">

                                <label className="text-danger">
                                  <strong>0.000 VNĐ</strong> 
                                </label>
                            </div>
                            <div class="form-check float-start col-1">

                                <i class="fas fa-trash"></i>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default CartDetail
