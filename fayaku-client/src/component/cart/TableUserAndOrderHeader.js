import React from 'react'

const TableUserAndOrderHeader = () => {
    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    <div className="float-start"><strong>Giao tới</strong></div>
                    <div className="float-end text-primary" type="button"><strong>Thay đổi</strong></div>
                </div>
                <div className="card-body">
                    <strong>Luu Tuan Kha | 0983860511</strong>
                    <p>Xóm 9, xã Hợp Thành, Huyện Yên Thành, Tỉnh Nghệ An</p>

                </div>
                {/* <div className="card-footer text-muted">2 days ago</div> */}
            </div>
            
            <div className="card text-center">
                {/* <div className="card-header">
                            <div className="float-start"><strong>Giao tới</strong></div>
                            <div className="float-end text-primary" type="button"><strong>Thay đổi</strong></div>
                        </div> */}
                <div className="card-body">
                    <div className="float-start"><strong>Tạm tính</strong></div>
                    <div className="float-end text-primary" type="button"><strong> 0 VNĐ</strong></div>
                    <br></br>
                    <div className="float-start"><strong>Giảm giá</strong></div>
                    <div className="float-end text-primary" type="button"><strong> 0 VNĐ</strong></div>
                </div>
                <div className="card-footer text-muted">
                    <div className="float-start"><strong>Tổng cộng</strong></div>
                    <div className="float-end text-primary" type="button"><strong> 0 VNĐ</strong></div>
                </div>
            </div>
            <br></br>
            <div className="">
                <button className="btn btn-danger w-100">THANH TOÁN</button>
            </div>

        </>
    )
}

export default TableUserAndOrderHeader
