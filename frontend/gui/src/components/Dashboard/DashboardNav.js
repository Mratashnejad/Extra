import React from "react";
import { Layout, Menu,Breadcrumb, } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider ,Content} = Layout;
const { SubMenu } = Menu;

class DashboardNav extends React.Component{
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}
        style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,   
      }}
    >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Extras
            </Menu.Item>
           
            <SubMenu key="sub1" icon={<UserOutlined />} title="Courses">
            <Menu.Item key="3">BackJack</Menu.Item>
            
              <Menu.Item key="4">Roullate</Menu.Item>
              <Menu.Item key="5">Poker</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Profile
            </Menu.Item>
          </Menu>
      </Sider>

        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
        

      </Content>
      </Layout>
     
        )
    }
};

export default DashboardNav ;