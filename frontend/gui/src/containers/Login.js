import React, { Component } from "react";
import { Form, Icon, Input, Button, Spin,Divider ,Checkbox } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import 'antd/dist/antd.css';
import './login.css';

import { FacebookOutlined,GoogleOutlined,InstagramOutlined } from '@ant-design/icons';



const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.userName, values.password);
        this.props.history.push('/');
      }
    });
  }

  render() {
    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }

    const { getFieldDecorator } = this.props.form;
    return (
            <div className='Login-form'>
            {errorMessage}
            {
                this.props.loading ?

                <Spin indicator={antIcon} />

                :

                <Form onSubmit={this.handleSubmit} className="login-form" size="small" name="login_form"
                >

                    <FormItem>
                    
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" />} placeholder="Username" />
                    )}
                    </FormItem>

                    <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock"  />} type="password" placeholder="Password" />
                    )}
                        </FormItem>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                                <a style={{ float: 'right' }} className="login-form-forgot" href="">
                            Forgot password ?
                        </a>
                        </Form.Item>

                    </Form.Item>

                    <FormItem>
                    <Button className="signup-form-button-primary" htmlType="submit">
                                Login
                    </Button> 
                            <Divider>No account yet?</Divider>
                            <Button href="/signup/" className="signup-form-button-secondary" htmlType="submit">
                                Signup
                    </Button>
                    </FormItem>
                </Form>
                    }
            </div>
      
    );
  }
}


const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}




export class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='signup'>
                <div className='container'>
                    <h1 className='h1'>Login with a social network</h1>
                    <div className='aligment'>
                    <FacebookOutlined style={{ fontSize: '52px'  , color:'black'}}/>
                    <GoogleOutlined style={{ fontSize: '52px' ,color:'#black'}}/>
                    <InstagramOutlined style={{ fontSize: '52px' , color:'#black'}}/>
                    </div>
                        <div className='form-wrapper'>
                        <h1 className="h1">Or use your email address</h1>
                        <WrappedNormalLoginForm />

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);