import React from "react";

/// css Files 
import 'antd/dist/antd.css';
import './Dashboard.css';

///ant design componnets 
import { Layout, Menu, Avatar } from 'antd';

import {
  UserOutlined,
} from '@ant-design/icons';

///dashboard HomePage
import Dashboard from './Dashboard'

///Image
import myIcon from '../Images/myIcon.png'


///courses
import Blackjack from '../Courses/Blackjack'
import Poker from '../Courses/Poker'
import Roulatte from '../Courses/Roulatte'
import HiLo from '../Courses/Hi-lo'
import PieGow from '../Courses/PieGow'
import Baccarat from '../Courses/Baccarat'
import Dragon from '../Courses/Dragon'

///setting & password setting
import UserSetting from '../UserSetting'



///dataTable For Extra lists
import ArticleList from "../Article/ArticleListView"


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
    if (this.state.currentPage === '1') {
      pageView = <ArticleList/>;
    } else if (this.state.currentPage === '5') {
      pageView = <Blackjack/>;
    } else if (this.state.currentPage === '6') {
      pageView =  <Poker/> ;
    }else if (this.state.currentPage === '7') {
      pageView =  <Roulatte/> ;
    }else if (this.state.currentPage === '8') {
      pageView =   <Baccarat/>;
    }else if (this.state.currentPage === '9') {
      pageView =  <HiLo/> ;
    }else if (this.state.currentPage === '10') {
      pageView =   <PieGow/>;
    }else if (this.state.currentPage === '11') {
      pageView =   <Dragon/>;
    }else if (this.state.currentPage === '12') {
      pageView =  <UserSetting/> ;
    }else {
      pageView = <Dashboard/>;
    }
    
    return (
      <Layout style={{minHeight:'100vh' ,backgroundColor:'#ffffff'}}>
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
          
          
          <Menu theme="dark" mode="inline"
            defaultSelectedKeys={[this.state.currentPage]}
            onSelect={({key}) => this.setState({currentPage:key})}>

          
            <div className="logo" style={{height:80,backgroundColor:"#002140", textAlign: 'center'}}>
            <Avatar src={myIcon} alt='' style={{width:60, height:60, marginTop:10}}/>
            </div>
           
         
            <SubMenu key="sub1" icon={<UserOutlined />} title="Extra">
            <Menu.Item key="1">Dealers </Menu.Item>
            <Menu.Item key="2">Supports</Menu.Item>
            <Menu.Item key="3">Floor Managers</Menu.Item>
            <Menu.Item key="4">Managers</Menu.Item>
            </SubMenu>
          
            
            <SubMenu key="sub2" icon={<UserOutlined />} title="Courses">
            <Menu.Item key="5">BlackJack</Menu.Item>
            <Menu.Item key="6">Poker</Menu.Item>
            <Menu.Item key="7">Roulatte</Menu.Item>
            <Menu.Item key="8">Baccarat</Menu.Item>
            <Menu.Item key="9">Hi-Lo</Menu.Item>
            <Menu.Item key="10">Pie gow</Menu.Item>
            <Menu.Item key="11">Dragon</Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<UserOutlined />} title="Profile">
            <Menu.Item key="12">Setting</Menu.Item>
            <Menu.Item key="13">Password</Menu.Item>
         
            </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '25px 2px 12px 150px'}}>
            <div style={{ padding: 10,  minHeight: 480 }}>
              {pageView} 
          </div>
          </Content>
          
      </Layout>
    </Layout>
    )
  }
};

export default DashboardNav ;