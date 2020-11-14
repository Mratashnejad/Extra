import React from "react";
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu} from "antd";
import * as actions from '../store/actions/auth';
import Footer from "../components/home/Footer";
//import LandingHeader from "../components/home/LandingHeader";
// import HomeNavbar from "../components/home/HomeNavbar";
import { InfoCircleOutlined, LogoutOutlined, LoginOutlined,  AlertOutlined, ReadOutlined } from "@ant-design/icons";

import '../containers/Layout.css';

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
                  <React.Fragment>
                    
                    <Menu.Item
                        className="nav-link"
                        key="logout"
                        onClick={this.props.logout}><Link to="/"> <LogoutOutlined />Logout </Link>
                    </Menu.Item>
              
                  </React.Fragment>
                  :
                   <React.Fragment>
                     <Menu.Item
                            className="nav-link"
                            key="login"><Link to="/login"><LoginOutlined />Login</Link>
                        </Menu.Item>
                         <Menu.Item
                            key="about"
                            className="nav-link">
                            <Link to="/about"><InfoCircleOutlined />How to Use</Link>
                            </Menu.Item>
                        
                  </React.Fragment>
          }
        </Menu>
        <Dashboard />
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

