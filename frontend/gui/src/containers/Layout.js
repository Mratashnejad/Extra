import React from "react";
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {Row, Col, Layout, Menu, Breadcrumb ,Avatar } from "antd";
import * as actions from '../store/actions/auth';
import Footer from "../components/home/Footer";
import LandingHeader from "../components/home/LandingHeader";
import HomeNavbar from "../components/home/HomeNavbar";

class CustomLayout extends  React.Component {
  render() {
    return (
      <div>
        <HomeNavbar />
        <LandingHeader />
        { this.props.children }
        <Footer />
        {/*
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
           */}
     </div>
    );
  }
};


const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout()) 
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));

