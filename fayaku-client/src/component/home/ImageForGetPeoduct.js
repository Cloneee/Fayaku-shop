import React from 'react'

const ImageForGetPeoduct = (props) => {
    let {images,index} = props
    return (
        <>
             <img
                    src={images[index]}
                    class="card-img-top imgproduct "
                    alt="..."
                />
        </>
    )
}

export default ImageForGetPeoduct
