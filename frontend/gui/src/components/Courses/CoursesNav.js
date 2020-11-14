import React from "react";
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

class CoursesNavbar extends React.Component{
    render() {
        return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
         Black Jack
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
         Roullate
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Poker
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          Baccarat
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}>
          Hi-Lo
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          Draggon
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
          Pie Gow
        </Menu.Item>
        <Menu.Item key="8" icon={<ShopOutlined />}>
          Rulls
        </Menu.Item>
      </Menu>
    </Sider>

        )
    }
};

export default CoursesNavbar ;