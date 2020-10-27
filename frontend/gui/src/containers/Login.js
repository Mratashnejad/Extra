import React, { Component } from "react";
import { Redirect  , withRouter} from "react-router-dom";

import { Form, Icon, Input, Button, Spin, Divider, Checkbox } from 'antd';

import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

///desing css lib
import 'antd/dist/antd.css';
import './login.css';


///social lib
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import fbLogin from "../components/FacebookLogin";
import googleLogin from "../components/GoogleLogin";
///icons lib
import { FacebookOutlined,GoogleOutlined,InstagramOutlined } from '@ant-design/icons';



const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
const googleID = "1089022313406-ctrbcmj1u99e5l9itfkt68d3nibjk0hb.apps.googleusercontent.com";
///social users login with google / facebook / instagram accounts including packages .


class SocialLoginForm extends React.Component {
   
    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        const responseFacebook = async (response) => {
            let fbResponse = await fbLogin(response.accessToken)
            
            console.log(fbResponse);
            console.log(response);
           
        }

        const responseGoogle = async (response) => {
            let googleResponse = await googleLogin(response.accessToken)
           
                
                console.log(googleResponse);
                console.log(response);
            
        
        }
    
        return (
        <div className='Login-form'>
                
                    <FacebookLogin
                    appId="<FACEBOOK APP ID>"
                    fields="name,email,picture"
                    textButton="facebook"
                    callback={responseFacebook}
                    onFailure={responseFacebook}
                    />
                    <GoogleLogin
                    clientId={googleID}
                    fields="name,email,picture"
                    textButton="GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    />  
        </div>
            
        );
    }  
}







///normal login users with email and password .

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
                            Forgot password ??
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





/// last Form showto users

export class Login extends Component {
    constructor(props) {
        super(props);
    }

   
    render() {
        return (
            <div className='signup'>
                <div className='container'>
                    <div className='form-wrapper'>
                        <h1 className='h1'>Login with a social network</h1>
                        <SocialLoginForm />
                        <h1 className="h1">Or use your email address</h1>
                        <WrappedNormalLoginForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));