import React from 'react'
import { Button, Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { } from 'antd';
import ContentHomePage from './ContentHomePage';
const HomePageAdmin = () => {
    const { SubMenu } = Menu;
    const handleClick = e => {
        console.log('click ', e);
    };
    return (
        <div className="row">
            <div class="col-2">
                <Menu
                    // onClick={this.handleClick}
                    // style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['product']}
                    mode="inline"
                >
                   
                    <SubMenu key="product" icon={<AppstoreOutlined />} title="Quản lý sản phẩm">
                        <Menu.Item key="1">Xem toàn bộ sản phẩm</Menu.Item>
                        <Menu.Item key="2">Thêm sản phẩm mới</Menu.Item>
                        <Menu.Item key="3">Cập nhật sản phẩm</Menu.Item>
                        <SubMenu key="analysis-product" title="Thống kê">
                            <Menu.Item key="7">Sản phẩm bán được</Menu.Item>
                            <Menu.Item key="8">Hàng trả về</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="order" icon={<AppstoreOutlined />} title="Quản lý đơn hàng">
                        <Menu.Item key="4">Xem toàn bộ đơn hàng</Menu.Item>
                        <Menu.Item key="6">Thêm đơn hàng</Menu.Item>
                        <Menu.Item key="7">Cập nhật đơn hàng</Menu.Item>
                        <SubMenu key="analysis-order" title="Thống kê">
                            <Menu.Item key="8">Đơn hàng đã giao</Menu.Item>
                            <Menu.Item key="9">Đơn hàng bị huỷ</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="log" icon={<SettingOutlined />} title="Quản lý cửa hàng">
                        <Menu.Item key="91">Nhật ký hoạt động (Log)</Menu.Item>
                        <Menu.Item key="10">Đơn hàng</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>

            </div>
            <div class="col-10">
                <ContentHomePage /> 
            </div>
        </div>

    )
}

export default HomePageAdmin
