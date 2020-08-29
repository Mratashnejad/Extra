import React from "react";
import {Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, } from "antd";

const { Header, Content, Footer } = Layout;

const CustomLayout = props => {
  return (
    <Layout className="layout" style={{backgroundColor: 'rgba(255, 255, 255, 0.0)', border: 0 }}>
      <Header style={{backgroundColor: 'rgba(255, 255, 255, 0.0)', border: 0 }}>
        <div className="logo" style={{float:"left" , size :"80px" }}/>
        <a>EXTRA SHIFT MANAGER</a>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "54px" , float:'right' }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Extra</Menu.Item>
          <Menu.Item key="3">Courses</Menu.Item>
          <Menu.Item key="4">Register</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          { props.children }
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        
        Mr.atashnejad ©2018 Created by 
      </Footer>
    </Layout>
  );
};

export default CustomLayout;
