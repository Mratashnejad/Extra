import React, { useState, useEffect } from "react";
import "./HomeNavbarStyled.css";
import { InfoCircleOutlined, LogoutOutlined,HomeOutlined, LoginOutlined,  AlertOutlined, ReadOutlined } from "@ant-design/icons";
import { Link, Router } from 'react-router-dom';


import { Menu, Buttom } from "antd";
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
    const handleClick  = (e) => {
        setCurrent(e.key)
    }

    return (
        <div>
            <Menu
                theme="dark"
                // onClick={handleClick}
                // selectedKeys={{ current }}
                selectedKeys="extra"
                mode="horizontal">
                <Menu.Item key="home">
                    <p className="icon-header-text">Vivaro Dealer Services</p>
                </Menu.Item>
                <Menu.Item
                    key="extra"
                    icon={<AlertOutlined />}
                    className="nav-link">
                    <Link to="/extra"><a>Extra</a></Link>
                </Menu.Item>
                <Menu.Item
                    key="courses"
                    icon={<ReadOutlined/>}
                    className="nav-link">
                    <Link to="/courses"><a>Courses</a></Link>
                </Menu.Item>
                
                <Menu.Item
                    key="about"
                    icon={<InfoCircleOutlined />}
                    className="nav-link">
                    <Link to="/about"><a>How to Use</a> </Link>
                    </Menu.Item>
                {
                //  auth
                //  ? ["dashboard"].map((item) => (
                //      <Menu.Item className="nav-link" key={item}>
                //        {/* <Link href={`/${item}`}> */}
                //        <a href={`/${item}`}>{item}</a>
                //        {/* // </Link> */}
                //      </Menu.Item>
                //    ))
                //  : ["login", "register"].map((item) => (
                //      <Menu.Item className="nav-link" key={item}>
                //        {/* <Link passHref href={`/${item}`}> */}
                //        <a href={`/${item}`}>{item}</a>
                //        {/* </Link> */}
                //      </Menu.Item>
                //    ))    
                }
                </Menu>
        </div>

    )
}
export default HomeNavbar