import React from 'react'
import Banner1 from '../../assets/image/banner/Banner1.jpg'
import Banner2 from '../../assets/image/banner/Banner2.jpg'
import Banner3 from '../../assets/image/banner/Banner3.jpg'

const SlideAndBannerHeader = () => {
    return (
        <div>
            {/* <img src="https://firebasestorage.googleapis.com/v0/b/projectperfume-faed4.appspot.com/o/images%2Fbg1.jpg?alt=media&token=cc7aed27-611e-457d-9567-c53cd1570021" class="img-fluid" alt="..." /> */}
            <div
                id="carouselBasicExample"
                class="carousel slide carousel-fade"
                data-mdb-ride="carousel"
            >
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src={Banner3}
                            
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img
                            src={Banner1}
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img
                            src={Banner2}
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>
               
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
           
        </div>
    )
}

export default SlideAndBannerHeader
