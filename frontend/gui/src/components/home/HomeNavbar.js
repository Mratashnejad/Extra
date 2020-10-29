import React, { useState, useEffect } from "react";
import "./HomeNavbarStyled.css";
import { InfoCircleOutlined, LogoutOutlined,HomeOutlined, LoginOutlined,  AlertOutlined, ReadOutlined } from "@ant-design/icons";
import { Link, Router } from 'react-router-dom';


import { Menu, Buttom,Avatar } from "antd";
function HomeNavbar() {
    const { subMenu } = Menu
    const { current, setCurrent } = useState("home")
    const [auth, setAuth] = useState(false)
    
    useEffect(() => {
        // const token = localStorage.getItem("")
        // if (token) {
        //     setAuth(true)
        // }
    }, [])
    useEffect(() => {
        if (current === "logout") {
            logOut()
        }
    }, [current])
    
    const logOut = () => {
        // localStorage.removeItem("")
        Router.path("/login")
        //authRest()
    }
    const handleClick = (e) => {
        setCurrent(e.key)
    }

    return (
        <div>
            <Menu
                theme="dark"
                // onClick={handleClick}
                // selectedKeys={{ current }}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <p className="icon-header-text">Vivaro Dealer Services</p>
                </Menu.Item>
                <Menu.Item
                    className="nav-link"
                    key="login"><Link to="/login"><LoginOutlined />Login</Link>
                </Menu.Item>
                
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
export default HomeNavbar