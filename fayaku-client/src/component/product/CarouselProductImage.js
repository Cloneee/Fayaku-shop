import React from 'react'
import { Carousel, Card, Row, Col } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import "../../assets/css/product.css"
const CarouselProductImage = (props) => {
    let product = props.product
    let type = props.type
    // function onChange(a, b, c) {
    //     console.log(a, b, c);
    // }
    const { Meta } = Card;
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const [dotPosition, setDotPosition] = React.useState('top');

    // const handlePositionChange = ({ target: { value } }) => {
    //     setDotPosition(value);
    // };
    const mapListProductImage = product.image.map((image, index) => {
        if (type === "actions card on")
            return <>
                {/* <h3 style={contentStyle}>1</h3> */}
                {/* <img className="img-thumbnail" src={product.image[index]} alt="" ></img> */}

                
                    <Card align="top"
                        actions={[
                            <PlusOutlined data-mdb-toggle="tooltip"
                                data-mdb-placement="top"
                                title="Thêm ảnh mới" />,
                            <EditOutlined key="edit" data-mdb-toggle="tooltip"
                                data-mdb-placement="top"
                                title="Sửa ảnh" />,
                            <DeleteOutlined key="delete" data-mdb-toggle="tooltip"
                                data-mdb-placement="top"
                                title="Xoá ảnh" />,
                        ]}
                        cover={
                            <img
                                className=" " src={product.image[index]} alt=""
                            />

                        }
                    >
                        <Meta
                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            className="text-center"
                            title={`${index + 1}/${product.image.length}`}
                        // description="This is the description"
                        />
                    </Card>


            </>
        else return <>
            {/* <h3 style={contentStyle}>1</h3> */}
            {/* <img className="img-thumbnail" src={product.image[index]} alt="" ></img> */}
            <Card

                cover={
                    <img
                        className="img-thumbnail" src={product.image[index]} alt=""
                    />

                }
            >
              
            </Card>
        </>

    })
    return (
        <>
            {/* <img className="img-thumbnail" src={product.image[0]} alt="" ></img> */}

            <Carousel dotPosition={dotPosition}>
                {mapListProductImage}
            </Carousel>

        </>
    )
}

export default CarouselProductImage


