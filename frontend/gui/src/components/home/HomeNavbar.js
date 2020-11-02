import React, { useState, useEffect } from "react";
import "./HomeNavbarStyled.css";
import { InfoCircleOutlined, LogoutOutlined,HomeOutlined, LoginOutlined,  AlertOutlined, ReadOutlined } from "@ant-design/icons";
import { Link} from 'react-router-dom';



import { Menu, Buttom,Avatar } from "antd";
class  HomeNavbar extends React.Component {
    render() {
        return (
            <div>
                { this.props.children }
            <Menu
                theme="dark"
                // onClick={handleClick}
                // selectedKeys={{ current }}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <p className="icon-header-text">Vivaro Dealer Services</p>
                </Menu.Item>
                {
                   this.props.isAuthenticated ?
                        <Menu.Item
                            className="nav-link"
                            key="logout"
                            >Logout
                        </Menu.Item>
                    :
                        <Menu.Item
                        className="nav-link"
                        key="login"><Link to="/login"><LoginOutlined />Login</Link>
                        </Menu.Item>
                }
                
                
                <Menu.Item
                key="about"
                className="nav-link">
                <Link to="/about"><InfoCircleOutlined />How to Use</Link>
                </Menu.Item>
                <Menu.Item
                key="courses"
                className="nav-link">
                <Link to="/courses"><ReadOutlined />Courses</Link>
                </Menu.Item>
                <Menu.Item
                key="extra"
                className="nav-link">
                <Link to="/extra"><AlertOutlined />Extra</Link>
                </Menu.Item>
        </Menu>
    </div>
        )
    }
};


export default HomeNavbar
