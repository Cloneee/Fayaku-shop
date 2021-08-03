import React, { useState } from 'react'
import { PageHeader, Button, Descriptions } from 'antd';

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const ContentHomePage = () => {

    const { Meta } = Card;



    return (


        <>


            <div className="site-page-header-ghost-wrapper ">
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="Chức năng thường dùng"
                    // subTitle="This is a subtitle"
                    extra={[
                        <Button key="3">Operation</Button>,
                        <Button key="2">Operation</Button>,
                        <Button key="1" type="primary">
                            Primary
                        </Button>,
                    ]}
                >
                    <Descriptions size="small" column={3}>
                        <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                        <Descriptions.Item label="Association">
                            <a>421421</a>
                        </Descriptions.Item>
                        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                        <Descriptions.Item label="Remarks">
                            Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                        </Descriptions.Item>
                    </Descriptions>
                </PageHeader>
                <div className="container row gap-auto  w-100 justify-content-center">
                    <div className="col-3 hover-shadow">
                        <Card
                            // style={{ width: 300 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                            actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>

                    </div>
                    <br></br>
                    <div className="col-3 hover-shadow ">
                        <Card
                            // style={{ width: 300 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                            actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>

                    </div>
                    <br></br>
                    <div className="col-3 hover-shadow">
                        <Card
                            // style={{ width: 300 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                            actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>

                    </div>
                    <br></br>
                    <div className="col-3 hover-shadow">
                        <Card
                            // style={{ width: 300 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                            actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>

                    </div>
                    <br></br>
                    
                </div>

            </div>
            <br></br>




        </>


    )
}

export default ContentHomePage
