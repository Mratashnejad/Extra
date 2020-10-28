import React from "react";
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {Row, Col, Layout, Menu, Breadcrumb ,Avatar } from "antd";
import * as actions from '../store/actions/auth';

import { HomeOutlined, LoginOutlined, LogoutOutlined, AlertOutlined, ReadOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg';
const style = { padding: '20px 0' };

class CustomLayout extends  React.Component {
  render() {
    return (
      <Layout className="layout" style={{backgroundColor: 'rgba(255, 255, 255, 0.0)', border: 0 }}>
        <Header style={{backgroundColor: 'rgba(255, 255, 255, 0.0)', border: 0 }}>
          <div className="logo" style={{float:"left" , size :"80px" }}/>
          <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
            <div id="logo" to="/">
              <img src={LOGO_URL} alt="logo" />
              <span>Vivaro Delaer Services</span>
            </div>
          </Col>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "54px" , float:'right' }}
          >
            
            <Menu.Item key="1"> <Link to="/"> <HomeOutlined /> Home</Link></Menu.Item>
            <Menu.Item key="2"> <Link to="/extra"><AlertOutlined />Extra</Link></Menu.Item>
            <Menu.Item key="3"> <Link to="/courses"><ReadOutlined />Courses</Link></Menu.Item>
            {
                this.props.isAuthenticated ?
                   
                  <Menu.Item key="4" onClick={this.props.logout}><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Menu.Item>
                    :
                  <Menu.Item key="4"><Link to="/login"><LoginOutlined />Login</Link></Menu.Item>
            }
            </Menu>
            </Row>
        </Header>

        <Content style={{ padding: "0 50px" }}>
          <div style={{ padding: 24, minHeight: 280 }}>
            { this.props.children }
          </div>
        </Content>

        <Footer>
          <Row>
            <Col span={8}>© 2020-2021 Mr.atashnejad
                <Link to="/help"> Help</Link>
                <Link to="/Contact-Us">  Contact Us</Link>
              <Link to="/Terms-of-Service">  Terms of Service</Link>
            </Col>
          </Row>
        </Footer> 
      </Layout>
    );

    
  }
  
};


const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout()) 
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));

