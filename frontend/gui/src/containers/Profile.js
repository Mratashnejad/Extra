import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Profile extends React.Component {
    render() {
        return (
            <Layout>
                <Content style={{ padding: '0 50px' }}>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="Profile">
                                    <Menu.Item key="1">Personal Information</Menu.Item>
                                    <Menu.Item key="2">Contact Information</Menu.Item>
                                    <Menu.Item key="3">Notifications</Menu.Item>
                                    <Menu.Item key="4">Change Password</Menu.Item>
                                </SubMenu>
                               
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            
                        informations coming here
                        </Content>
                    </Layout>


                </Content>
            </Layout>
        );
    }
}

export default Profile;