import React from "react";
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {Row, Col, Layout, Menu, Breadcrumb ,Avatar } from "antd";
import * as actions from '../store/actions/auth';
import Footer from "../components/home/Footer";
import LandingHeader from "../components/home/LandingHeader";
// import HomeNavbar from "../components/home/HomeNavbar";
import { InfoCircleOutlined, LogoutOutlined,HomeOutlined, LoginOutlined,  AlertOutlined, ReadOutlined } from "@ant-design/icons";

import "../components/home/HomeNavbarStyled.css";




class CustomLayout extends  React.Component {
  render() {
    return (
       <div>
        <Menu theme="dark" // onClick={handleClick} // selectedKeys={{ current }} 
          mode="horizontal">
                <Menu.Item key="home">
                    <p className="icon-header-text">Vivaro Dealer Services</p>
                </Menu.Item>
          { this.props.isAuthenticated ?
                  <t>
                    <Menu.Item
                        className="nav-link"
                        key="logout"
                        onClick={this.props.logout}>Logout
                        </Menu.Item>
                        <Menu.Item
                        key="extra"
                        className="nav-link">
                        <Link to="/extra"><AlertOutlined />Extra</Link>
                        </Menu.Item>
                        <Menu.Item
                        key="courses"
                        className="nav-link">
                        <Link to="/courses"><ReadOutlined />Courses</Link>
                        </Menu.Item>
                  </t>
                  :
                   <te>
                     <Menu.Item
                            className="nav-link"
                            key="login"><Link to="/login"><LoginOutlined />Login</Link>
                        </Menu.Item>
                         <Menu.Item
                            key="about"
                            className="nav-link">
                            <Link to="/about"><InfoCircleOutlined />How to Use</Link>
                            </Menu.Item>
                        
                  </te>
          }
      </Menu>
        
        <LandingHeader />
        { this.props.children }
        <Footer />
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

