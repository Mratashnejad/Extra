import React, { Component } from "react";
import { Form, Icon, Input, Button, Spin } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import 'antd/dist/antd.css';
import './login.css';



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

                    <FormItem>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                    Or 
                    <NavLink 
                        
                        to='/signup/'> Signup
                    </NavLink>
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
            <div className='login'>
                <div className='container'>
                    <h1>Log into your Extrashift account</h1>
                    <div className='form-wrapper'>
                        <WrappedNormalLoginForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);