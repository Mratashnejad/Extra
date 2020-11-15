import React from "react";
import { Layout, Menu, Breadcrumb,Icon , Avatar } from 'antd';
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
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

import Blackjack from '../Courses/Blackjack'


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DashboardNav extends React.Component{
  state = {
    collapsed: false,
    currentPage:'1',
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    let pageView;
    if (this.state.currentPage === '2') {
      pageView = <Blackjack />;
    } else if (this.state.currentPage === '3'){
      pageView = '';
    } else {
      pageView = '';
    }
    
    return (
      <Layout style={{minHeight:'100vh'}}>
      <Sider
          style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          }}
          width={152}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          
          <div className="logo" style={{height:80,backgroundColor:"#002140", textAlign: 'center'}}>
            {/* <Avatar src={myIcon} alt='' style={{width:60, height:60, marginTop:10}}/> */}
          </div>


          <Menu theme="dark" mode="inline"
            defaultSelectedKeys={[this.state.currentPage]}
            onSelect={({key}) => this.setState({currentPage:key})}>
              
            <Menu.Item key="1">
            <Icon type ="UserOutlined" /> 
            <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
            <Icon type ="VideoCameraOutlined" /> 
            <span>Extra List</span>
            </Menu.Item>
            <Menu.Item key="3">
            <Icon type ="UploadOutlined" /> 
            <span>Profile</span>
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '12px 12px'}}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {pageView}
          </div>
          </Content>
          <Footer style={{ textAlign: 'center'}}>
            Loving you forever ©2019 Created by XWH
          </Footer>
      </Layout>
    </Layout>
    )
  }
};

export default DashboardNav ;