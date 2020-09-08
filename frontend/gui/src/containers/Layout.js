import React from "react";
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, } from "antd";
import * as actions from '../store/actions/auth';

const { Header, Content, Footer } = Layout;

class CustomLayout extends  React.Component {
  render() {
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
             {
                    this.props.isAuthenticated ?
    
                    <Menu.Item key="4" onClick={this.props.logout}>
                        Logout
                    </Menu.Item>
    
                    :
    
                    <Menu.Item key="4">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                }
            <Menu.Item key="1"><Link to ="/">Home</Link></Menu.Item>
            <Menu.Item key="2"> <Link to="/extra">Extra</Link></Menu.Item>
            <Menu.Item key="3">
              <Link to="/courses">Courses</Link></Menu.Item>
            
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            { this.props.children }
          </div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          
          Mr.atashnejad ©2018 Created by 
        </Footer> */}
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

