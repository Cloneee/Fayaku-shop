import React from 'react'
import header1 from "../../assets/image/headerTypeProduct/1.jpg"
const TypeProductHeader = () => {
    return (
        <>
            <div className="col-xl-3 col-lg-6 col-sm-4 d-flex   " type="button"            >
                <div className="card hover-shadow container " style={{ "backgroundImage": "url('https://images.goodsmile.info/cgm/images/product/20210728/11572/87933/large/ee79cce83c521581b8adf56631cecdd1.jpg')" }} >
                   
                   
                    <div
                        class=" mask"
                        style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}
                    > 
                     <div className="col-12" style={{ width: "100%" }}></div>
                    <div style={{ height: "20%", width: "100%" }}></div>
                    <div class="d-flex justify-content-start">
                        <div className="headerFirstTitle col-11">
                            <h2><strong className="text-white">CATEGORY TEMP</strong></h2>
                            {/* <button className="btn btn-light">Button Test</button> */}
                        </div>
                    </div>
                    <div class="d-flex justify-content-start">
                        <div className="headerSecondTitle col-8">
                            {/* <h5><strong className="text-black">XEM TẤT CẢ</strong></h5> */}
                        </div>
                    </div>

                    </div>


                </div>

            </div>

        </>
    )
}

export default TypeProductHeader
